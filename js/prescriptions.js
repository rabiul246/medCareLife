let prescriptions = JSON.parse(localStorage.getItem("prescriptions")) || [];

function savePrescription(email, text) {
  prescriptions.push({ email, text, date: new Date().toLocaleString() });
  localStorage.setItem("prescriptions", JSON.stringify(prescriptions));
}

function getPrescriptionsForPatient(email) {
  return prescriptions.filter(p => p.email === email);
}
