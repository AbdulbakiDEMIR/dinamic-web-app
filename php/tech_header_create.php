<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Veritabanı bağlantı dosyasını dahil et

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formdan gelen başlık verisi
    $newHeader = $_POST['name'];

    // Kayıt ekleme sorgusu
    $insertSql = "INSERT INTO tech_headers (header) VALUES (?)";

    // Hazırlıklı sorgu
    $stmt = $conn->prepare($insertSql);
    $stmt->bind_param("s", $newHeader);

    // Sorguyu çalıştır
    if ($stmt->execute()) {
        echo "Yeni başlık başarıyla eklendi.";
    } else {
        echo "Hata oluştu: " . $stmt->error;
    }

    // Kaynakları kapat
    $stmt->close();
} else {
    echo "Geçersiz istek.";
}

$conn->close();
?>
