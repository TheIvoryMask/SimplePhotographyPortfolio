
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".photo-preview");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});


// DARKMODE

document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  
  function updateModeUI(isDarkMode) {
      if (isDarkMode) {
          document.body.classList.add('darkmode');
      } else {
          document.body.classList.remove('darkmode');
      }
  }
  
  darkModeToggle.addEventListener('click', function() {
      const currentlyDark = document.body.classList.contains('darkmode');
      const newMode = !currentlyDark;
      
      updateModeUI(newMode);
      localStorage.setItem('darkMode', newMode);
  });
  
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  updateModeUI(savedDarkMode);
});

