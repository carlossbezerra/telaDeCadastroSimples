document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
  
    alert(`Nome: ${nome}\nSobrenome: ${sobrenome}\nEmail: ${email}\nTelefone: ${telefone}\nEndereço: ${endereco}`);
    // Aqui você colocaria o código para enviar os dados para o servidor via AJAX
  });