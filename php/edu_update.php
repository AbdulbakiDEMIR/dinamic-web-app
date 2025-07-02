<?php
require_once "auth.php"; // Yetki kontrolü için
require_once "db_connect.php"; // Bağlantı dosyanı çağırıyoruz

// Gelen JSON verisini oku
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Verileri al
    $id = $_POST['id'];
    $university = $_POST['edu_university_update_input'];
    $date = $_POST['edu_date_update_input'];
    $department = $_POST['edu_department_update_input'];
    $class =  $_POST['edu_class_name_update_input'];
    $note = $_POST['edu_note_update_input'];

    // Sorgu hazırla
    $updateSql = "UPDATE educations 
                SET university = ?, date = ?, department = ?, class = ?, note = ?
                WHERE id = ?";

    // Hazırlıklı sorgu (prepared statement) kullanmak güvenlik için önemli (SQL Injection'a karşı)
    $stmt = $conn->prepare($updateSql);
    $stmt->bind_param("sssssi", $university, $date, $department, $class,$note, $id);

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
