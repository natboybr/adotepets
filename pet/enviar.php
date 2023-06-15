<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Processar os dados do formulário aqui

    // Exemplo de envio de e-mail com os dados do formulário
    $to = 'natan_silva_2004@hotmail.com';
    $subject = 'Formulário de Contato - Mensagem Recebida';
    $message = "Deseja falar sobre: {$_POST['opcao']}\n\nNome: {$_POST['nome']}\n\nE-mail: {$_POST['email']}\n\nMensagem: {$_POST['mensagem']}";
    $headers = "From: {$_POST['email']}";
    mail($to, $subject, $message, $headers);

    // Definir a mensagem de sucesso na sessão
    session_start();
    $_SESSION['success_message'] = 'Formulário enviado com sucesso!';

    // Redirecionar para outra página após o envio do formulário
    header("Location: sucesso.html");
    exit();
}
?>
// ISSO É RASCUNHO QUE NÃO FUNCIONOU! É UM PROGRAM PARA SERVIDOR PARA EMAILS!


