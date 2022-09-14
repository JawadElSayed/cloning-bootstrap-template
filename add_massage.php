<?php

include("connection.php");



$full_name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$query = $mysqli->prepare("INSERT INTO contact_me(full_name, email, phone, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $full_name, $email, $phone, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);



?>