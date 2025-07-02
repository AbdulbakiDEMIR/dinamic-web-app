<?php
session_start();
echo json_encode([
    'logged_in' => isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true
]);
?>