<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Veritabanı bağlantısı

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id']; // Güncellenecek kaydın id'si
    $newHeader = $_POST['name']; // Yeni başlık metni

    $updateSql = "UPDATE tech_headers SET header = ? WHERE id = ?";

    $stmt = $conn->prepare($updateSql);
    $stmt->bind_param("si", $newHeader, $id);

    if ($stmt->execute()) {
        echo "Başlık başarıyla güncellendi.";
    } else {
        echo "Güncelleme hatası: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Geçersiz istek.";
}

$conn->close();
?>
