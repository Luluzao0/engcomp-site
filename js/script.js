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
  
  document.addEventListener("DOMContentLoaded", function () {
    function initializeChart(id, config) {
      const canvas = document.getElementById(id);
      if (canvas) {
        const ctx = canvas.getContext("2d");
        new Chart(ctx, config);
      } else {
        console.error("Elemento " + id + " não encontrado.");
      }
    }
  
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2
    };
  
    // Configuração do Gráfico de Barras
    initializeChart("graficoBarras", {
      type: "bar",
      data: {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [{
          label: "Alunos Matriculados",
          data: [120, 150, 180, 200],
          backgroundColor: "#246dec"
        }]
      },
      options: chartOptions
    });
  
    // Configuração do Gráfico de Linhas
    initializeChart("graficoLinhas", {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
          label: "Pesquisas Publicadas",
          data: [5, 10, 8, 15, 20, 18],
          borderColor: "#cc3c43",
          fill: false
        }]
      },
      options: chartOptions
    });
  
    // Configuração do Gráfico de Pizza
    initializeChart("graficoPizza", {
      type: "pie",
      data: {
        labels: ["Eng. Computação", "Eng. Elétrica", "Eng. Civil"],
        datasets: [{
          data: [40, 35, 25],
          backgroundColor: ["#246dec", "#367952", "#f5b74f"]
        }]
      },
      options: chartOptions
    });
  
    // Configuração do Gráfico de Radar
    initializeChart("graficoRadar", {
      type: "radar",
      data: {
        labels: ["Matemática", "Programação", "Eletrônica", "Gestão", "Comunicação"],
        datasets: [{
          label: "Habilidades dos Alunos",
          data: [80, 90, 70, 60, 75],
          borderColor: "#4f35a1",
          backgroundColor: "rgba(79, 53, 161, 0.2)"
        }]
      },
      options: chartOptions
    });
  });
  