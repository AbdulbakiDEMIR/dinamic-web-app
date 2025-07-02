<?php
require_once "db_connect.php";

$sql = "SELECT * FROM personal_info WHERE id = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();
    echo json_encode($data); // JSON veri olarak doğru gönder
} else {
    echo json_encode(["error" => "Kayıt bulunamadı"]); // yine JSON gönder
}
$conn->close();
?>