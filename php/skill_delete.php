<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Veritabanı bağlantısı

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_id'])) {
    $deleteId = $_POST['delete_id'];

    $deleteSql = "DELETE FROM tech_contents WHERE id = ?";

    $stmt = $conn->prepare($deleteSql);
    $stmt->bind_param("i", $deleteId);

    if ($stmt->execute()) {
        echo "İçerik başarıyla silindi.";
    } else {
        echo "Silme işlemi sırasında hata oluştu: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Geçersiz istek veya silinecek ID belirtilmedi.";
}

$conn->close();
?>
