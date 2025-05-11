function saveAppointment(doctorEmail, date, time, patientName, patientEmail) {
  const newAppointment = {
    doctorEmail,
    date,
    time,
    patientName,
    patientEmail
  };

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push(newAppointment);
  localStorage.setItem("appointments", JSON.stringify(appointments));
}

function showDoctorAppointments() {
  const doctor = JSON.parse(localStorage.getItem("currentUser")) || {
    email: "dummydoctor@medcare.com"
  };

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  const doctorAppointments = appointments.filter(app => app.doctorEmail === doctor.email);

  const tableBody = document.getElementById("appointmentsTableBody");
  tableBody.innerHTML = "";

  if (doctorAppointments.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="4" class="text-center p-4">No appointments found.</td></tr>`;
    return;
  }

  doctorAppointments.forEach(app => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border px-4 py-2">${app.patientName}</td>
      <td class="border px-4 py-2">${app.patientEmail}</td>
      <td class="border px-4 py-2">${app.date}</td>
      <td class="border px-4 py-2">${app.time}</td>
    `;
    tableBody.appendChild(row);
  });
}
