function exibirAlert(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    if (nome && telefone && email && mensagem) {
      alert(`Mensagem enviada. Entraremos em contato através do endereço: ${email}`);
      document.getElementById("nome").value = "";
          document.getElementById("telefone").value = "";
          document.getElementById("email").value = "";
          document.getElementById("mensagem").value = "";
    } else {
      alert("Você deve preencher todos os campos.");
    }
  }