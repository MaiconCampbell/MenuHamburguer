const $elBody = document.querySelector('body');
const $elBurguer = document.querySelector('#burguer')
const $elItensMenu = document.querySelector('#itensMenu')

window.addEventListener('resize', () => {
  //var altura = window.innerHeight;
  var largura = window.innerWidth
console.log(largura)
  largura >=768 ?
  $elItensMenu.style.display = 'block' :
  $elItensMenu.style.display = 'none'
})

$elBurguer.addEventListener('click', () => {
  $elItensMenu.style.display == 'block' ?
  $elItensMenu.style.display = 'none'  :
  $elItensMenu.style.display = 'block'
})
