const loader = document.querySelector('.outer')
const main = document.querySelector('#hero')

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none'
    loader.style.overflow = 'hidden'

    main.style.display = 'block'
    setTimeout(() => (main.style.opacity = 1), 10)
  }, 2000);
}

init();