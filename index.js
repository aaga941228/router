const router = new Router(routes);
document.querySelector('#home').addEventListener('click', () => router.loadRoute(''))
document.querySelector('#contacto').addEventListener('click', () => router.loadRoute('contacto'))
document.querySelector('#acerca').addEventListener('click', () => router.loadRoute('about'))
