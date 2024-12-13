import exteriorImageSrc from '../images/exterior.jpg';

export function loadcontact() {
    const contentStart = document.getElementById("content");
    contentStart.innerHTML = ''; // Clear the content div

    const exteriorImage = document.createElement('img');
    exteriorImage.src = exteriorImageSrc; // Use the imported image path
    exteriorImage.alt = "Amethyst Bistro Exterior";

    // Creating elements for the contact information
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';

    const phoneParagraph = document.createElement('p');
    phoneParagraph.innerHTML = '<strong>Phone:</strong> (123) 456-7890';

    const emailParagraph = document.createElement('p');
    emailParagraph.innerHTML = '<strong>Email:</strong> contact@amethystbistro.com';

    const addressParagraph = document.createElement('p');
    addressParagraph.innerHTML = '<strong>Address:</strong> 42 Lavender Boulevard, Crystal Hills 3188';

    // Appending elements to the content div
    contentStart.appendChild(contactTitle);
    contentStart.appendChild(phoneParagraph);
    contentStart.appendChild(emailParagraph);
    contentStart.appendChild(addressParagraph);
    contentStart.appendChild(exteriorImage);
}
