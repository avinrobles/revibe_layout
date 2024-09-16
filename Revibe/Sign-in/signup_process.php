<?php
session_start();
require_once 'connect.php';

$error_message = "";
$success_message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['newUsername'];
    $email = $_POST['email'];
    $password = $_POST['newPassword'];
    $confirm_password = $_POST['confirmPassword'];

    if ($password !== $confirm_password) {
        $error_message = "Passwords do not match";
    } else {
        $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
        $stmt->bind_param("ss", $username, $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $error_message = "Username or email already exists";
        } else {
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            $insert_stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
            $insert_stmt->bind_param("sss", $username, $email, $hashed_password);

            if ($insert_stmt->execute()) {
                $success_message = "Account created successfully. You can now login.";
            } else {
                $error_message = "Error creating account. Please try again.";
            }
            $insert_stmt->close();
        }
        $stmt->close();
    }
}

if ($error_message) {
    $_SESSION['error_message'] = $error_message;
    header("Location: signup.html");
    exit();
} elseif ($success_message) {
    $_SESSION['success_message'] = $success_message;
    header("Location: login.html");
    exit();
}
?>
