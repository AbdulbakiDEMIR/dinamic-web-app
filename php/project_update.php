<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Veritabanı bağlantısı

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['project_id_update_input']; // Güncellenecek projenin ID'si
    $img = $_POST['project_img_update_input'];
    $header = $_POST['project_name_update_input'];
    $date = $_POST['project_date_update_input'];
    $explanation = $_POST['project_description_update_input'];
    $link = $_POST['project_github_update_input'];

    $updateSql = "UPDATE projects 
                  SET img = ?, header = ?, date = ?, explanation = ?, link = ?
                  WHERE id = ?";

    $stmt = $conn->prepare($updateSql);
    $stmt->bind_param("sssssi", $img, $header, $date, $explanation, $link, $id);

    if ($stmt->execute()) {
        echo "Proje başarıyla güncellendi.";
    } else {
        echo "Güncelleme sırasında hata oluştu: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Geçersiz istek.";
}

$conn->close();
?>
