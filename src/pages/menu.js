import foodSrc from '../images/abfood.jpg';

export function loadmenu() {
    const contentStart = document.getElementById("content");
    contentStart.innerHTML = ''; // Clear the content div

    const foodImage = document.createElement('img');
    foodImage.src = foodSrc; // Use the imported image path
    foodImage.alt = "Amethyst Bistro Food";

    // Creating elements for the menu
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our Menu';

    const appetizersTitle = document.createElement('h3');
    appetizersTitle.textContent = 'Appetizers';
    const appetizersList = document.createElement('ul');
    appetizersList.innerHTML = `
        <p>Bruschetta - Fresh tomatoes, basil, garlic, and olive oil on toasted bread</p>
        <p>Stuffed Mushrooms - Mushrooms stuffed with cheese and herbs</p>
    `;

    const mainCoursesTitle = document.createElement('h3');
    mainCoursesTitle.textContent = 'Main Courses';
    const mainCoursesList = document.createElement('ul');
    mainCoursesList.innerHTML = `
        <p>Grilled Salmon - Served with asparagus and lemon butter sauce</p>
        <p>Filet Mignon - Cooked to perfection with a side of garlic mashed potatoes</p>
    `;

    const dessertsTitle = document.createElement('h3');
    dessertsTitle.textContent = 'Desserts';
    const dessertsList = document.createElement('ul');
    dessertsList.innerHTML = `
        <p>Chocolate Lava Cake - Rich chocolate cake with a gooey center</p>
        <p>Cheesecake - Classic cheesecake with a graham cracker crust</p>
    `;

    // Appending elements to the content div
    contentStart.appendChild(menuTitle);
    contentStart.appendChild(appetizersTitle);
    contentStart.appendChild(appetizersList);
    contentStart.appendChild(mainCoursesTitle);
    contentStart.appendChild(mainCoursesList);
    contentStart.appendChild(dessertsTitle);
    contentStart.appendChild(dessertsList);
    contentStart.appendChild(foodImage);
}
