document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío del formulario

  // Captura los valores del formulario
  const sessionDate = document.getElementById('session-date').value;
  const sessionTime = document.getElementById('session-time').value;
  const sessionType = document.getElementById('session-type').value;

  // Define el número de WhatsApp al que se enviará el mensaje
  const phoneNumber = '+305 980-2606'; // Reemplaza con el número de teléfono (incluye código de país, pero sin el signo +)

  // Crea el mensaje
  const message = `Hello, I would like to schedule a session.\nDate: ${sessionDate}\nHour: ${sessionTime}\nType of Inquiry: ${sessionType}`;

  // Codifica el mensaje en URI
  const encodedMessage = encodeURIComponent(message);

  // Crea la URL de WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Redirige a la URL de WhatsApp
  window.open(whatsappURL, '_blank');
});




// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});
// main.js

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

  // Ajustar el z-index cuando el menú esté abierto
  navLinks.style.zIndex = isOpen ? "10" : "1";
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
  navLinks.style.zIndex = "1"; // Asegura que el z-index se ajusta al cerrar el menú
});

