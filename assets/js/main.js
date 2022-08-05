window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'), 
 navClose = document.getElementById('nav-close')



if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    } )
}

// ==================== REMOVE MOBILE MENU ====================

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// ==================== ACCORDION SKILLS ====================

const skillsContent = document.getElementsByClassName('skills-content')
const skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills() {
  let itemClass = this.parentNode.className
  for(let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills-content skills-close'
  }

  if(itemClass === 'skills-content skills-close') {
    this.parentNode.className = 'skills-content skills-open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})

// ==================== QUALIFICATION TABS ====================

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification_active')
    })

    tab.classList.add('qualification_active')
  })
})

// ==================== SERVICES MODAL ====================

const modalViews = document.querySelectorAll('.services_modal')
const modalButtons = document.querySelectorAll('.services_button')
const modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalCLick) {
  modalViews[modalCLick].classList.add('active-modal')
}

modalButtons.forEach((modalButton, i) => {
  modalButton.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

// ==================== PORTFOLIO SWIPER ====================

// let swiper = new Swiper('.portfolio_container', {
//   cssMode: true,
//   loop: true,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev', 
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });


let swiper = new Swiper(".portfolio_container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ==================== SCROLL SECTIONS ACTIVE LINK ====================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)


// ==================== CHANGE BACKGROUND HEADER ====================

function scrollHeader() {
  const nav = document.getElementById('header')

  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ==================== SHOW SCROLL UP ====================

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ==================== DARK LIGHT THEME ====================

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


// Obtain the current theme that the interface has by validating the dark-theme class
if (selectedTheme) {
  // If the validation is fulfilled, ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selectd-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})