// Dummy users (will be stored in localStorage if not already present)
const defaultUsers = [
    { name: "Dr. Alice", email: "doctor@medcare.com", password: "doctor123", role: "doctor" },
    { name: "John Doe", email: "patient@medcare.com", password: "patient123", role: "patient" },
    { name: "Admin", email: "admin@medcare.com", password: "admin123", role: "admin" }
  ];
  
  // Initialize users in localStorage
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
  
  // Register Form Handler
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const form = new FormData(registerForm);
      const newUser = {
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
        role: form.get("role")
      };
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const exists = users.find(u => u.email === newUser.email);
      if (exists) {
        alert("User already exists with this email.");
        return;
      }
  
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful! Please login.");
      window.location.href = "login.html";
    });
  }
  
  // Login Form Handler
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const form = new FormData(loginForm);
      const email = form.get("email");
      const password = form.get("password");
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(u => u.email === email && u.password === password);
  
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert(`Login successful! Redirecting to ${user.role} dashboard...`);
  
        // Redirect based on role
        switch (user.role) {
          case "doctor":
            window.location.href = "dashboard/doctor.html";
            break;
          case "patient":
            window.location.href = "dashboard/patient.html";
            break;
          case "admin":
            window.location.href = "dashboard/admin.html";
            break;
          default:
            alert("Invalid role.");
        }
      } else {
        alert("Invalid email or password.");
      }
    });
  }
  