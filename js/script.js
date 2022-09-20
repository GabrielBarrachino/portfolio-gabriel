const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* ATIVAR E DESATIVAR MENU */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Ativa o link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove o menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/* SCROLL ANIMAÇÃO *
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* SCROLL ANIMAÇÃO HOME *
sr.reveal('.home__title',{})
sr.reveal('.home__title2',{delay: 200})
sr.reveal('.button__contact', {delay: 200})
sr.reveal('.img-social .home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})

/* SCROLL ANIMAÇÃO SOBRE 
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__text', {delay: 200})
sr.reveal('.button__download', {delay: 200})

/* SCROLL ANIMAÇÃO HABILIDADES 
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text', {delay: 200})
sr.reveal('.skill__data', {interval: 200})
sr.reveal('.skills__img', {delay: 400})

/* SCROLL ANIMAÇÃO PORTFOLIO 
sr.reveal('.work__img', {delay: 200})
sr.reveal('.text-workk', {delay: 200})
sr.reveal('.p-work', {delay: 200})

/* SCROLL ANIMAÇÃO CONTATO 
sr.reveal('.contact__input', {interval: 200})
sr.reveal('.contact__button', {interval: 200})
sr.reveal('.label', {interval: 200})*/