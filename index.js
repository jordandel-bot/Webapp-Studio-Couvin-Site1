/* ouverture du code javascript */
const $section = document.querySelector('.hidden')
/* création de la constante $section de la class .hidden */
const $linkShow = document.querySelector('#show')
/* création de la constante $linkShow sur l'id #show indiqé dans le code HTML */

$linkShow.addEventListener('click', event => {
    event.preventDefault();
    $section.classList.toggle('hidden')
});
/* Ecoute de l'évènement de la constante $linkShow et de la constante $section */
