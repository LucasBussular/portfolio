<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["nome"];
    $email = $_POST["email"];
    $message = $_POST["mensagem"];

    $to = "lucasbussular15@gmail.com"; 
    $subject = "Nova mensagem do site de $nome";
    $headers = "From: $email";

    if (mail($to, $subject, $mensagem, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar a mensagem.";
    }
}
?>