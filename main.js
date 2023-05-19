var divsProjetos = document.querySelectorAll('.link__projetos .link__pai');
divsProjetos.forEach(function(elemento) {
  elemento.addEventListener('click', function(event) {
    event.preventDefault();
    var elementoIrmão = this.parentNode.querySelector('.oculto');
    elementoIrmão.classList.toggle('aparecer');
  });
});