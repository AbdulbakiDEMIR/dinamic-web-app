<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Veritabanı bağlantısı

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formdan gelen veriler
    $id = $_POST['id']; // Güncellenecek içerik satırının id'si
    $icon = $_POST['icon'];
    $text = $_POST['text'];

    // SQL sorgusu
    $updateSql = "UPDATE tech_contents SET icon = ?, text = ? WHERE id = ?";

    // Prepared statement kullanımı
    $stmt = $conn->prepare($updateSql);
    $stmt->bind_param("ssi", $icon, $text, $id);

    if ($stmt->execute()) {
        echo "İçerik başarıyla güncellendi.";
    } else {
        echo "Güncelleme hatası: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Geçersiz istek.";
}

$conn->close();
?>
