function validarFormulario() {
    var opcao = document.getElementById("opcao").value;
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Validação dos campos
    if (opcao === "") {
        alert("Por favor, selecione uma opção.");
        return false;
    }

    if (nome === "") {
        alert("Por favor, digite seu nome.");
        return false;
    }

    if (email === "") {
        alert("Por favor, digite seu e-mail.");
        return false;
    }

    if (mensagem === "") {
        alert("Por favor, digite uma mensagem.");
        return false;
    }

    // Validação adicional, se necessário...
    
    // Redirecionar para outra página após o envio do formulário
    window.location.href = "sucesso.html";

    return false; // Retorna false para evitar o envio tradicional do formulário
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form-contato");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio tradicional do formulário
        validarFormulario(); // Chama a função validarFormulario ao enviar o formulário
    });
});



