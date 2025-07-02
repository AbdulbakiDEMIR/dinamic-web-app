<?php
require_once "db_connect.php";


// Şifreyi güvenli hale getir
$username = 'admin';
$hashedPassword = password_hash('t1W7ku@J7EJMDU', PASSWORD_DEFAULT);

$sql = "INSERT INTO admin (username, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $hashedPassword);


if ($stmt->execute()) {
    echo "Admin kullanıcı başarıyla eklendi.";
} else {
    echo "Hata: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>


