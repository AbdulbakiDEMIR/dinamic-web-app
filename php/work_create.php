<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Veritabanı bağlantı dosyası

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formdan gelen veriler
    $newDate = $_POST['work_company_date_create_input'];
    $newCompany = $_POST['work_company_name_create_input'];
    $newMission = $_POST['work_company_mission_create_input'];
    $newExplanation = $_POST['work_company_explanation_create_input'];
    $headerid = 1;
    // Kayıt ekleme sorgusu
    $insertSql = "INSERT INTO job_experiences (date, company, mission, explanation, header_id) VALUES (?, ?, ?, ?, ?)";

    // Hazırlıklı sorgu (prepared statement)
    $stmt = $conn->prepare($insertSql);
    $stmt->bind_param("ssssi", $newDate, $newCompany, $newMission, $newExplanation, $headerid);

    // Sorguyu çalıştır
    if ($stmt->execute()) {
        echo "Yeni kayıt başarıyla eklendi.";
    } else {
        echo "Hata oluştu: " . $stmt->error;
    }

    // Kaynakları kapat
    $stmt->close();
} else {
    echo "Geçersiz istek.";
}

// Veritabanı bağlantısını kapat
$conn->close();
?>
