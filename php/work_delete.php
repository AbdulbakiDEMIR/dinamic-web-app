<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Veritabanı bağlantı dosyası

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_id'])) {
    // Silinecek kayıt ID'si
    $deleteId = $_POST['delete_id'];

    // Silme sorgusu
    $deleteSql = "DELETE FROM job_experiences WHERE id = ?";

    // Hazırlıklı sorgu
    $stmt = $conn->prepare($deleteSql);
    $stmt->bind_param("i", $deleteId);

    if ($stmt->execute()) {
        echo "Kayıt başarıyla silindi.";
    } else {
        echo "Silme sırasında hata oluştu: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Geçersiz istek veya silinecek ID belirtilmedi.";
}

$conn->close();
?>
