import "./styles.css";
import { initialload } from './homecontent.js';

// Call the function to load content once the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    initialload();
});
