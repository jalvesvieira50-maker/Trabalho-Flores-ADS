// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Formulário
document.getElementById("formContato").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});