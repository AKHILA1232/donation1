// Function to show a specific section based on the section ID
function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Function to handle form submission
function handleDonation(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('thankYouMessage').style.display = 'block';
}
let currentSlideIndex = 0;

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    slides[currentSlideIndex].classList.remove('active');

    currentSlideIndex += n;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    slides[currentSlideIndex].classList.add('active');
}

// Initialize the homepage section
showSection('home');

// Automatically change slides every 5 seconds
setInterval(() => changeSlide(1), 5000);

// Handle Donation Form Submission
function handleDonation(event) {
    event.preventDefault();
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';
    document.getElementById('donationForm').reset();
}
