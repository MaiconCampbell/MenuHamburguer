const $elBurguer = document.querySelector('#burguer')
const $elItensMenu = document.querySelector('#itensMenu')

$elBurguer.addEventListener('click', () => {
  $elItensMenu.style.display == 'block' ?
  $elItensMenu.style.display = 'none'  :
  $elItensMenu.style.display = 'block'
})