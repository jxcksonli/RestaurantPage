import "./styles.css";
import { initialload } from './pages/home.js';
import { loadmenu } from './pages/menu.js';
import { loadcontact } from './pages/contact.js';

// Call the function to load content once the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    initialload();
});

document.getElementById('home').addEventListener('click', () => {
    initialload();
});

document.getElementById('menu').addEventListener('click', () => {
    loadmenu();
});

document.getElementById('contact').addEventListener('click', () => {
    loadcontact();
});