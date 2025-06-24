// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileMenuBtn.addEventListener('click', () => {
  const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  mobileMenuBtn.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');
});

// Button functionality

// Login button
document.getElementById('login-btn').addEventListener('click', () => {
  alert('Redirecting to login page...');
  // window.location.href = '/login'; // Replace with actual login page URL
});

// Sign Up button
document.getElementById('signup-btn').addEventListener('click', () => {
  alert('Redirecting to signup page...');
  // window.location.href = '/signup'; // Replace with actual signup page URL
});

// Start trial button in hero
document.getElementById('start-trial-btn').addEventListener('click', () => {
  alert('Trial started! Welcome aboard.');
});

// Pricing buttons
document.querySelectorAll('.pricing-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const plan = e.target.getAttribute('data-plan');
    alert(`You selected the ${plan} plan. Thank you!`);
  });
});

// Contact form submit
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();
  if(email && message){
    alert(`Thank you for your message, we will get back to you shortly!`);
    e.target.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
