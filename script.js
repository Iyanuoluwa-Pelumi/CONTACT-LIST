/*let addBtn = document.querySelector('.btn');
let listItems = document.querySelector('.contacts-list');
let contactDetails = localStorage.getItem('contactDetails');

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let contactName = document.querySelector('#name').value.trim();
    let contactEmail = document.querySelector('#email').value;
    let contactTel = document.querySelector('#phone').value;
    let contactDate = document.querySelector('#date').value;
    let contactText = document.querySelector('#message').value.trim();

    //RESET THE INPUT FIELD AFTER ADDING   
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#date').value = '';
    document.querySelector('#message').value = '';



    if (contactName === '') {
        alert('Name is required!');
        return;

    } else if (contactTel === '') {
        alert('Telephone Number is required!');
        return;

    } else if (contactDate === '') {
        alert('Date is required!');
        return;
    };

    let contactDetails = document.createElement('div');
    contactDetails.classList.add('items-div');
    contactDetails.innerHTML = `
    <div class="name-delete" >
    <h3 class="item-name">${contactName}</h3>
    <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
    </svg>
    </div
    <p>${contactEmail}</p>
    <p>${contactTel}</p>
    <p>${contactDate}</p>
    <p>${contactText}</p>
    `;

    listItems.appendChild(contactDetails);


    let deleteIcon = contactDetails.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', () => {
        contactDetails.remove();
    })

    let addedText = document.querySelector('.added-text');
    addedText.textContent = `${contactName} added!`;
    setTimeout(() => {
        addedText.textContent = '';
    }, 2000);

    localStorage.setItem('contactDetails', 'contactDetails');
});*/

let addBtn = document.querySelector('.btn');
let listItems = document.querySelector('.contacts-list');

// Load contacts from localStorage or initialize empty array
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Function to render a contact to the UI
function renderContact(contact) {
    let contactDetails = document.createElement('div');
    contactDetails.classList.add('items-div');
    contactDetails.innerHTML = `
        <div class="name-delete">
            <h3 class="item-name">${contact.name}</h3>
            <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
            </svg>
        </div>
        <p>${contact.email}</p>
        <p>${contact.tel}</p>
        <p>${contact.date}</p>
        <p>${contact.message}</p>
    `;

    listItems.appendChild(contactDetails);

    // Delete functionality
    let deleteIcon = contactDetails.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', () => {
        contactDetails.remove();

        // This saves it on localStorage so it won't appear upon refresh
        contacts = contacts.filter(items => !(items.name === contact.name && items.tel === contact.tel && items.date === contact.date));
        localStorage.setItem('contacts', JSON.stringify(contacts));
    });
}

// Render all existing contacts on page load
contacts.forEach(contact => {
    renderContact(contact);
});

// Add new contact on button click
addBtn.addEventListener('click', (event) => {
    event.preventDefault(); //This prevent the form from reload.

    let contactName = document.querySelector('#name').value.trim();
    let contactEmail = document.querySelector('#email').value;
    let contactTel = document.querySelector('#phone').value;
    let contactDate = document.querySelector('#date').value;
    let contactText = document.querySelector('#message').value.trim();

    

    // Form Validation
    if (contactName === '') {
        alert('Name is required!');
        return;
    } else if (contactTel === '') {
        alert('Telephone Number is required!');
        return;
    } else if (contactDate === '') {
        alert('Date is required!');
        return;
    }

    // Contact object
    let newContact = {
        name: contactName,
        email: contactEmail,
        tel: contactTel,
        date: contactDate,
        message: contactText
    };

    // Add to contacts array and localStorage
    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    // Render to UI
    renderContact(newContact);

    // Reset all inputs
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#date').value = '';
    document.querySelector('#message').value = '';

    // Text Added
    let addedText = document.querySelector('.added-text');
    addedText.textContent = `${contactName} added!`;
    setTimeout(() => {
        addedText.textContent = '';
    }, 2000);
});



//THEME FUNCTIONALITY
let headingDiv = document.querySelector('.container');
let colorMode = document.querySelector('.theme-icon');
let footerColor = document.querySelector('footer');

// Function to apply Dark Mode
function applyDarkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    colorMode.style.fill = 'blue';
    document.body.style.transition = '2s';
}

// Function to apply Light Mode
function applyLightMode() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    colorMode.style.fill = 'black';
    colorMode.style.transition = '2s';
}

// Load theme on page load
window.addEventListener('DOMContentLoaded', () => {
    let savedTheme = localStorage.getItem('colorMode');
    if (savedTheme === 'dark') {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});

// Toggle theme on click
colorMode.addEventListener('click', () => {
    let currentTheme = localStorage.getItem('colorMode');
    if (currentTheme === 'dark') {
        applyLightMode();
        localStorage.setItem('colorMode', 'light');
    } else {
        applyDarkMode();
        localStorage.setItem('colorMode', 'dark');
    }
});