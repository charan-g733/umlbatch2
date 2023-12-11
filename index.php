<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$database = "uml";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$request = json_decode(file_get_contents('php://input'));
$username = $request->username;
$password = $request->password;

$sql = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows === 1) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$conn->close();
?>
