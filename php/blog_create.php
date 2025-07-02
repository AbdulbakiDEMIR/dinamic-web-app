<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Veritabanı bağlantısı


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $img = $_POST['blog_img_create_input'];
    $header = $_POST['blog_name_create_input'];
    $date = $_POST['blog_date_create_input'];
    $explanation = $_POST['blog_description_create_input'];
    $link = $_POST['blog_github_create_input'];

    $insertSql = "INSERT INTO blogs (img, header, date, explanation, link) 
                  VALUES (?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($insertSql);
    $stmt->bind_param("sssss", $img, $header, $date, $explanation, $link);

    if ($stmt->execute()) {
        echo "Blog başarıyla eklendi.";
    } else {
        echo "Hata oluştu: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Geçersiz istek.";
}

$conn->close();
?>
