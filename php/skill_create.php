<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Veritabanı bağlantısı

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $headerId = $_POST['header_id'];
    $icon = $_POST['icon'];
    $text = $_POST['text'];

    $insertSql = "INSERT INTO tech_contents (header_id, icon, text) VALUES (?, ?, ?)";

    $stmt = $conn->prepare($insertSql);
    $stmt->bind_param("iss", $headerId, $icon, $text);

    if ($stmt->execute()) {
        echo "Yeni içerik başarıyla eklendi.";
    } else {
        echo "Hata oluştu: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Geçersiz istek.";
}

$conn->close();
?>
