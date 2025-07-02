<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Bağlantı dosyanı çağırıyorsun

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Güncellenecek veriler (bunları formdan veya başka bir yerden alabilirsin)
    $id = $_POST['id']; // Güncellemek istediğin kayıt ID'si
    $newDate = $_POST['work_company_date_update_input'];
    $newCompany = $_POST['work_company_name_update_input'];
    $newMission = $_POST['work_company_mission_update_input'];
    $newExplanation = $_POST['work_company_explanation_update_input'];

    // Güncelleme sorgusu
    $updateSql = "UPDATE job_experiences 
                SET date = ?, company = ?, mission = ?, explanation = ?
                WHERE id = ?";

    // Hazırlıklı sorgu (prepared statement) kullanmak güvenlik için önemli (SQL Injection'a karşı)
    $stmt = $conn->prepare($updateSql);
    $stmt->bind_param("ssssi", $newDate, $newCompany, $newMission, $newExplanation, $id);

    // Sorguyu çalıştır
    if ($stmt->execute()) {
        echo "Kayıt başarıyla güncellendi.";
    } else {
        echo "Hata oluştu: " . $stmt->error;
    }
}
 else {
    echo "Geçersiz istek.";
}
// Bağlantıyı kapat
$stmt->close();
$conn->close();
?>
