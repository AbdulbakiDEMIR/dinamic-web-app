<?php
session_set_cookie_params(0); // Tarayıcı kapanınca cookie silinir
session_start();

// Oturum açılmış mı kontrol et
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    http_response_code(403); // Yetkisiz
    echo json_encode(['error' => 'Yetkisiz erişim']);
    exit;
}

// --- Oturum süresi kontrolü (örn. 15 dakika işlem yapılmazsa oturum biter) ---
$timeout = 900; // 900 saniye = 15 dakika

if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY']) > $timeout) {
    session_unset();     // oturum değişkenlerini sil
    session_destroy();   // oturumu bitir
    http_response_code(401); // Oturum süresi doldu
    echo json_encode(['error' => 'Oturum süresi doldu']);
    exit;
}

$_SESSION['LAST_ACTIVITY'] = time(); // Her işlemde zamanı güncelle
?>