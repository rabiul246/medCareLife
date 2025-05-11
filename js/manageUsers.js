// Load users from localStorage or set empty
let users = JSON.parse(localStorage.getItem("users")) || [];

function renderUsers() {
  const tbody = document.getElementById("userTableBody");
  tbody.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border p-2">${user.email}</td>
      <td class="border p-2">${user.password}</td>
      <td class="border p-2">${user.role}</td>
      <td class="border p-2 space-x-2">
        <button onclick="editUser(${index})" class="bg-yellow-400 px-3 py-1 rounded">Edit</button>
        <button onclick="deleteUser(${index})" class="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });

  localStorage.setItem("users", JSON.stringify(users));
}

document.getElementById("addUserForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;
  const role = document.getElementById("newRole").value;

  users.push({ email, password, role });
  renderUsers();

  e.target.reset();
  alert("User added successfully!");
});

function editUser(index) {
  const user = users[index];
  const email = prompt("Edit Email", user.email);
  const password = prompt("Edit Password", user.password);
  const role = prompt("Edit Role (Doctor, Patient, Admin)", user.role);

  if (email && password && role) {
    users[index] = { email, password, role };
    renderUsers();
  }
}

function deleteUser(index) {
  if (confirm("Are you sure you want to delete this user?")) {
    users.splice(index, 1);
    renderUsers();
  }
}

// Initial render
renderUsers();
