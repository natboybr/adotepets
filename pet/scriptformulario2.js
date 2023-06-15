document.getElementById("animal").addEventListener("change", function() {
  var animal = this.value;
  var animalNames = document.getElementById("opcoesCao");
  var animalNamesGato = document.getElementById("opcoesGato");

  if (animal === "cao") {
    animalNames.style.display = "block";
    animalNamesGato.style.display = "none";
  } else if (animal === "gato") {
    animalNames.style.display = "none";
    animalNamesGato.style.display = "block";
  } else {
    animalNames.style.display = "none";
    animalNamesGato.style.display = "none";
  }
});

function validarFormulario() {
  // Lógica de validação do formulário

  // Retorna true ou false com base na validação
}

document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    // Obtenha os valores dos campos do formulário
    var animal = document.getElementById("animal").value;
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var contato = document.getElementById("contato").value;

    // Valide os campos do formulário, se necessário...

    // Redirecionar para outra página após o envio
    window.location.href = "sucesso2.html";

    // Impedir o envio padrão do formulário
    event.preventDefault();
  });
});
