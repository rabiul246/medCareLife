// Utility: Get current user from localStorage
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

// Save a new appointment (used by patient)
function saveAppointment(doctorEmail, date, time) {
  const patient = getCurrentUser();
  if (!patient) {
    alert("User not logged in");
    return;
  }

  const appointment = {
    patientName: patient.name,
    patientEmail: patient.email,
    doctorEmail,
    date,
    time
  };

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(appointments));
}

// Show appointments for a doctor (used by doctor page)
function showDoctorAppointments() {
  const doctor = getCurrentUser();
  if (!doctor) {
    alert("Doctor not logged in");
    return;
  }

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  const doctorAppointments = appointments.filter(app => app.doctorEmail === doctor.email);

  const tbody = document.getElementById("appointmentTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  if (doctorAppointments.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center py-4">No appointments found.</td></tr>`;
    return;
  }

  doctorAppointments.forEach(app => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-4 py-2">${app.patientName}</td>
      <td class="border px-4 py-2">${app.date}</td>
      <td class="border px-4 py-2">${app.time}</td>
      <td class="border px-4 py-2">${app.patientEmail}</td>
    `;
    tbody.appendChild(tr);
  });
}
