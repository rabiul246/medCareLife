const ads = [
    {
      image: "../image/imgCom1.png",
      name: "CardiPlus",
      details: "Used for controlling blood pressure. Effective in reducing heart strain."
    },
    {
      image: "../image/imgCom2.png",
      name: "NeuroCalm",
      details: "Helps treat neurological disorders. Calms nerves and improves clarity."
    },
    {
      image: "../image/medecineCompany.png",
      name: "GastroCare",
      details: "Effective for indigestion and ulcer prevention. Safe and natural."
    }
  ];
  
  let currentAd = 0;
  
  function updateAd() {
    const ad = ads[currentAd];
    document.getElementById("companyImage").src = ad.image;
    document.getElementById("companyName").textContent = ad.name;
    document.getElementById("companyDetails").textContent = ad.details;
  
    currentAd = (currentAd + 1) % ads.length;
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    updateAd(); // Initial load
    setInterval(updateAd, 5000); // Rotate every 5s
  });
  