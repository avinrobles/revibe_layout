<?php
session_start();
require_once 'connect.php';

$error_message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            header("Location: dashboard.html"); // Redirect to dashboard or home page
            exit();
        } else {
            $error_message = "Invalid username or password";
        }
    } else {
        $error_message = "Invalid username or password";
    }
    $stmt->close();
}

if ($error_message) {
    $_SESSION['error_message'] = $error_message;
    header("Location: login.html");
    exit();
}
?>
