// Exemplo de código JS / jQuery separado
$(document).ready(function() {
    // Ao clicar em "Leia Mais", mostra um alerta (exemplo)
    $('.btn-leia-mais').on('click', function(e) {
      e.preventDefault();
      alert('Você clicou em "Leia Mais"!');
    });
  
    // Adicione aqui outras interações em jQuery/JS que precisar
    console.log("Script customizado da UEMA carregado com sucesso!");
  });
  