document.querySelector('.link__projetos .link__pai').addEventListener('click', function(event) {
    event.preventDefault(); 
    var elementoIrmão = this.parentNode.querySelector('.oculto');
    elementoIrmão.classList.toggle('aparecer');
  });