<?php

require 'connection.php';
$conn    = Connect();
$Name    = $conn->real_escape_string($_POST['Name']);
$email   = $conn->real_escape_string($_POST['email']);
$phone_no = $conn->real_escape_string($_POST['phone_no']);
$yes_no = $conn->real_escape_string($_POST['yes_no']);
$query   = "INSERT into form-data-for-event(Name,email,phone_no,yes_no) VALUES('" . $Name . "','" . $email . "','" . $phone_no . "','" . $yes_no . "')";
$success = $conn->query($query);

if (!$success) {
    die("Couldn't enter data: ".$conn->error);

}

echo "Thank You For Contacting Us <br>";

$conn->close();

?>