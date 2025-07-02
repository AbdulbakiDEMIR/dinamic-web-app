<?php
session_start();
require_once "db_connect.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (empty($_POST['username']) || empty($_POST['password'])) {
        http_response_code(400);
        echo "Kullanıcı adı ve şifre gereklidir.";
        exit();
    }

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT id, username, password FROM admin WHERE username = ?";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        http_response_code(500);
        echo "Sorgu hazırlanamadı: " . $conn->error;
        exit();
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($id, $fetchedUsername, $hashedPassword);
        $stmt->fetch();

        if (password_verify($password, $hashedPassword)) {
            $_SESSION['admin_logged_in'] = true;
            setcookie("adminToken", "active", time() + 3600, "/");
            http_response_code(200);
            echo "Giriş başarılı. Yönlendiriliyorsunuz...";
        } else {
            http_response_code(401);
            echo "Şifre yanlış.";
        }
    } else {
        http_response_code(401);
        echo "Kullanıcı bulunamadı.";
    }

    $stmt->close();
    $conn->close();
}
?>
