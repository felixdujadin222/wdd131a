// scripts/getdates.js

// Display the current year
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");
  
    if (yearSpan) {
      const year = new Date().getFullYear();
      yearSpan.textContent = year;
    }
  
    if (lastModifiedSpan) {
      lastModifiedSpan.textContent = document.lastModified;
    }
  });
  