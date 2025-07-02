<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_id'])) {
    $deleteId = $_POST['delete_id'];

    $deleteSql = "DELETE FROM tech_headers WHERE id = ?";
    $stmt = $conn->prepare($deleteSql);
    $stmt->bind_param("i", $deleteId);

    if ($stmt->execute()) {
        echo "Başlık ve ona bağlı tüm içerikler silindi.";
    } else {
        echo "Silme işlemi başarısız: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Geçersiz istek.";
}

$conn->close();
?>
