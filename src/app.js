import {page, render} from './lib.js';


import {homePage} from './views/home.js'
import {personalityPage} from './views/personality.js'
import { educationPage } from './views/education.js';
import { experiencePage } from './views/experience.js';
import { contactsPage } from './views/contacts.js';


const main = document.getElementById('main')
document.getElementById('body').addEventListener('click', mobileNavMenu)


page ('/', decoratePage, homePage);
page ('/personality', decoratePage, personalityPage);
page('/education', decoratePage, educationPage);
page('/experience', decoratePage, experiencePage);
page('/contacts', decoratePage, contactsPage);

page.start();


function decoratePage(context, next) {
    context.render = (content) => render(content, main); 
    context.setActiveNav = (link) => setActiveNav(link);
    next()
}

function mobileNavMenu(event) {
    if (event.target.classList.contains('mobile')) {
        document.querySelector('.menu-items').classList.add('visible')
    } 
    else {
        document.querySelector('.menu-items').classList.remove('visible')
    }
}

function setActiveNav(link) {
    const links = document.querySelectorAll('.nav-menu a')
    links.forEach(a => a.classList.remove('active'))
    document.getElementById(link).classList.add('active')
}