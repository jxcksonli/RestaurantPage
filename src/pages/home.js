export function initialload() {
    const contentStart = document.getElementById("content");
    contentStart.innerHTML = ''; // Clear the content div

    const instoreImage = document.createElement('img');
    instoreImage.src = "../images/instore.jpg";

    // Creating elements
    const descriptionParagraph = document.createElement('p');
    const descriptionStrong = document.createElement('strong');
    descriptionStrong.textContent = 'Description:';
    descriptionParagraph.appendChild(descriptionStrong);
    descriptionParagraph.innerHTML += '<br> Amethyst Bistro is a charming and elegant dining establishment that offers a delightful culinary experience with a focus on fresh, locally-sourced ingredients. The bistro\'s ambiance is inspired by the rich hues of amethyst, creating a serene and inviting atmosphere perfect for any occasion. Guests can enjoy a diverse menu that includes both classic and contemporary dishes, skillfully crafted to please every palate.';

    const hoursParagraph = document.createElement('p');
    const hoursStrong = document.createElement('strong');
    hoursStrong.textContent = 'Opening Hours:';
    hoursParagraph.appendChild(hoursStrong);
    hoursParagraph.innerHTML += '<br> Monday to Friday: 11:00 AM - 10:00 PM<br> Saturday: 12:00 PM - 11:00 PM<br> Sunday: 12:00 PM - 9:00 PM';

    const locationParagraph = document.createElement('p');
    const locationStrong = document.createElement('strong');
    locationStrong.textContent = 'Location:';
    locationParagraph.appendChild(locationStrong);
    locationParagraph.innerHTML += '<br> 42 Lavender Boulevard, Crystal Hills 3188';

    // Appending elements to the content div
    contentStart.appendChild(instoreImage);
    contentStart.appendChild(descriptionParagraph);
    contentStart.appendChild(hoursParagraph);
    contentStart.appendChild(locationParagraph);
}
