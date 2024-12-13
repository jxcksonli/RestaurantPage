export function loadmenu() {
    const contentStart = document.getElementById("content");
    contentStart.innerHTML = ''; // Clear the content div

    // Creating elements for the menu
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our Menu';

    const appetizersTitle = document.createElement('h3');
    appetizersTitle.textContent = 'Appetizers';
    const appetizersList = document.createElement('ul');
    appetizersList.innerHTML = `
        <li>Bruschetta - Fresh tomatoes, basil, garlic, and olive oil on toasted bread</li>
        <li>Stuffed Mushrooms - Mushrooms stuffed with cheese and herbs</li>
    `;

    const mainCoursesTitle = document.createElement('h3');
    mainCoursesTitle.textContent = 'Main Courses';
    const mainCoursesList = document.createElement('ul');
    mainCoursesList.innerHTML = `
        <li>Grilled Salmon - Served with asparagus and lemon butter sauce</li>
        <li>Filet Mignon - Cooked to perfection with a side of garlic mashed potatoes</li>
    `;

    const dessertsTitle = document.createElement('h3');
    dessertsTitle.textContent = 'Desserts';
    const dessertsList = document.createElement('ul');
    dessertsList.innerHTML = `
        <li>Chocolate Lava Cake - Rich chocolate cake with a gooey center</li>
        <li>Cheesecake - Classic cheesecake with a graham cracker crust</li>
    `;

    // Appending elements to the content div
    contentStart.appendChild(menuTitle);
    contentStart.appendChild(appetizersTitle);
    contentStart.appendChild(appetizersList);
    contentStart.appendChild(mainCoursesTitle);
    contentStart.appendChild(mainCoursesList);
    contentStart.appendChild(dessertsTitle);
    contentStart.appendChild(dessertsList);
}
