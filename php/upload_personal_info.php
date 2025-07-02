<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // veya db_connect_pdo.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $admin_hi = $_POST['admin_hi'];
    $admin_name = $_POST['admin_name'];
    $admin_description = $_POST['admin_description'];
    $admin_image = $_POST['image_adapter_input'];

    // SQL sorgusu: ? işaretleriyle hazırlık yapıyoruz
    $sql = "UPDATE personal_info SET 
                header = ?, 
                name = ?, 
                description = ?, 
                img_path = ? 
            WHERE id = 1";

    // prepare ve bind işlemleri
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $admin_hi, $admin_name, $admin_description, $admin_image);

    // sorguyu çalıştır
    if ($stmt->execute()) {
        echo $admin_hi ."-". $admin_name ."-". $admin_description ."-". $admin_image; 
        echo "Bilgiler başarıyla güncellendi!";
    } else {
        echo "Güncelleme hatası: " . $conn->error;
    }

 


} else {
    echo "Geçersiz istek.";
}

$stmt->close();
$conn->close();
?>
