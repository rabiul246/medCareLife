// Dummy data simulating the patient history
const patientHistoryData = [
    {
      email: "patient@medcare.com",
      history: [
        { disease: "Flu", doctor: "Dr. Smith", medicine: "FluMed 300" },
        { disease: "Cold", doctor: "Dr. Johnson", medicine: "ColdCare Syrup" }
      ]
    },
    {
      email: "jane.doe@example.com",
      history: [
        { disease: "Headache", doctor: "Dr. Green", medicine: "PainAway" },
        { disease: "Stomach Ache", doctor: "Dr. Brown", medicine: "Antacids" }
      ]
    }
  ];
  
  // Event listener for search button
  document.getElementById("searchBtn").addEventListener("click", function () {
    const email = document.getElementById("patientEmail").value;
  
    // Find patient history by email
    const patient = patientHistoryData.find(p => p.email === email);
  
    // If patient found, display their history, otherwise show a message
    const historyTable = document.getElementById("historyTable");
    const historyBody = document.getElementById("historyBody");
  
    if (patient) {
      // Clear previous results
      historyBody.innerHTML = "";
  
      // Populate the table with patient history
      patient.history.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="border p-2">${item.disease}</td>
          <td class="border p-2">${item.doctor}</td>
          <td class="border p-2">${item.medicine}</td>
        `;
        historyBody.appendChild(row);
      });
  
      historyTable.classList.remove("hidden"); // Show the history table
    } else {
      alert("Patient history not found for this email.");
    }
  });
  