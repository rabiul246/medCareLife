const doctors = [
  { name: "Dr. Alice Smith", email: "alice@medcare.com", specialist: "Cardiologist" },
  { name: "Dr. John Carter", email: "john@medcare.com", specialist: "Cardiologist" },
  { name: "Dr. Sara Khan", email: "sara@medcare.com", specialist: "Cardiologist" },
  { name: "Dr. Tom Harris", email: "tom@medcare.com", specialist: "Cardiologist" },
  { name: "Dr. Emily Ray", email: "emily@medcare.com", specialist: "Cardiologist" },
  { name: "Dr. Bob Lee", email: "bob@medcare.com", specialist: "Neurologist" },
  { name: "Dr. Clara Brown", email: "clara@medcare.com", specialist: "Dermatologist" }
];

localStorage.setItem("doctors", JSON.stringify(doctors));
