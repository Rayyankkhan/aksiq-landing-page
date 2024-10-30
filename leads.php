<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['cn']);
    $email = htmlspecialchars($_POST['em']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['msg']);

    $to = "qasimabbas209@hotmail.com"; // Replace with your email address
    $subject = "Leads Form AKSIQ";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "subject: $subject\n";
    $body .= "Message: $message\n";

    $headers = "From: no-reply@logostellar.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script type='text/javascript'>
                window.location.href = 'https://logostellar.com/askiq-landing/thankyou/'; // Replace with your URL
              </script>";
    } else {
        echo "Email sending failed";
    }
} else {
    echo "Invalid request method";
}

?>
