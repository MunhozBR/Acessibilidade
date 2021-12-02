tamanho = 16;
function diminuir(){
  tamanho--;
  document.body.style.fontSize=tamanho+"px";
}
function aumentar(){
  tamanho++;
  document.body.style.fontSize=tamanho+"px";
}




const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})