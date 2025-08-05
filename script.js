
document.addEventListener('DOMContentLoaded', () => {
    let addBtn = document.querySelector('.btn');
    let listItems = document.querySelector('.contacts-list');

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let contactName = document.querySelector('#name').value;
    let contactEmail = document.querySelector('#email').value;
    let contactTel = document.querySelector('#phone').value;
    let contactDate = document.querySelector('#date').value;
    let contactText = document.querySelector('#message').value;

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
    }

    let contactDivDisplay = document.querySelector('.contacts-list');
    contactDivDisplay.style.display = 'block';

    let contactDetails = document.createElement('div');
    contactDetails.innerHTML = `
    <h3>${contactName}</h3>
    <p>${contactEmail}</p>
    <p>${contactTel}</p>
    <p>${contactDate}</p>
    <p>${contactText}</p>
    <hr>
    `

    listItems.appendChild(contactDetails);

    let addedText = document.querySelector('.added-text');
    addedText.textContent = `${contactName} added!`;
    setTimeout(() => {
        addedText.textContent = '';
    }, 1000);
});
});






































//Theme Functionality
let headingDiv = document.querySelector('.container');
let colorMode = document.querySelector('.theme-icon');
let footerColor = document.querySelector('footer');

// Function to apply Dark Mode
function applyDarkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    colorMode.style.fill = '#007BFF';
    //footerColor.style.backgroundColor = 'black';
    //footerColor.style.color = 'white';
    //footerColor.style.boxShadow = '0 -2px 4px  #ffff'
    // Transitions
    document.body.style.transition = '2s';
    //colorMode.style.transition = '2s';
    //footerColor.style.transition = '2s';
}

// Function to apply Light Mode
function applyLightMode() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    colorMode.style.fill = 'black';
    //footerColor.style.backgroundColor = 'white';
    //footerColor.style.color = 'black';
    //footerColor.style.boxShadow = '0 -2px 4px  rgba(0, 0, 0.1)'
    // Transitions
    //document.body.style.transition = '2s';
    colorMode.style.transition = '2s';
    //footerColor.style.transition = '2s';
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