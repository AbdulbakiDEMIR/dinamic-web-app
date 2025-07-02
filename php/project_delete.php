<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Veritabanı bağlantısı

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $deleteId = $_POST['id'];

    $deleteSql = "DELETE FROM projects WHERE id = ?";

    $stmt = $conn->prepare($deleteSql);
    $stmt->bind_param("i", $deleteId);

    if ($stmt->execute()) {
        echo "Proje başarıyla silindi.";
    } else {
        echo "Silme işlemi sırasında hata oluştu: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Geçersiz istek veya silinecek ID belirtilmedi.";
}

$conn->close();
?>
