//O método offsetWidth em JavaScript retorna a largura total de um elemento, incluindo a largura do conteúdo, as bordas e o preenchimento interno, mas excluindo a margem.
function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')
    alert("Combinado!")
    
    setTimeout(function openModal(){
        if(e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    },2000)

    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}



let nao = document.getElementById('nao');
let container = document.querySelector('.container');

nao.addEventListener('mouseover', function() {
  let x = Math.round(Math.random() * (container.offsetWidth - nao.offsetWidth));
  let y = Math.round(Math.random() * (container.offsetHeight - nao.offsetHeight));

  nao.style.left = x + 'px';
  nao.style.top = y + 'px';
});



