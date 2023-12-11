<?php
$servername = "localhost";  // Your database server name
$username = "root";         // Your database username
$password = "";             // Your database password
$database = "uml";  // Your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query
$sql = "SELECT * FROM result";
$result = $conn->query($sql);

// Fetch the data
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Close the database connection
$conn->close();

// Convert data to JSON and send it to JavaScript
echo json_encode($data);
?>
