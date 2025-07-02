<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uploadDir = '/img/';
    $jsFile = '../img/images.js';

    if (!file_exists('..' . $uploadDir)) {
        mkdir('..' . $uploadDir, 0777, true);
    }

    $imageName = $_POST['image_create_name_input'];
    $file = $_FILES['image_create_input'];

    if ($file['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $file['tmp_name'];
        $originalName = basename($file['name']);
        $fileExtension = pathinfo($originalName, PATHINFO_EXTENSION);

        function generateUniqueId($length = 32) {
            return bin2hex(random_bytes($length / 2));
        }

        $uniqueId = generateUniqueId();
        $newFileName = $uniqueId . '.' . $fileExtension;
        $destination = '..' . $uploadDir . $newFileName;
        $path = $uploadDir . $newFileName;

        // Eski JS içeriğini oku ve JSON kısmını ayıkla
        $data = [];
        if (file_exists($jsFile)) {
            $jsContent = file_get_contents($jsFile);
            // "export const imagesData = " kısmını sil
            $jsonPart = preg_replace('/^export\s+const\s+imagesData\s*=\s*/', '', trim($jsContent));
            // JSON dizisini doğru şekilde parse et
            $data = json_decode(rtrim($jsonPart, ';'), true); // ; işareti varsa kaldır
        }

        $newEntry = [
            "id" => $uniqueId,
            "name" => $imageName,
            "path" => $path
        ];

        $data[] = $newEntry;

        // Yeni JS dosyası oluştur
        $jsExport = "export const imagesData = " . json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . ";";
        file_put_contents($jsFile, $jsExport);

        if (move_uploaded_file($fileTmpPath, $destination)) {
            echo "Dosya başarıyla yüklendi: $newFileName";
        } else {
            echo "Dosya yüklenirken bir hata oluştu.";
        }
    } else {
        echo "Dosya yükleme hatası: " . $file['error'];
    }
} else {
    echo "Geçersiz istek.";
}
?>
