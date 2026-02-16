const API_BASE_URL = "http://localhost:3000/api"; // change if needed

async function getUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    const users = await response.json();
    const tableBody = document.getElementById("usersTableBody");

    users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        <td>${user.bankacc}</td>
      `;
      tableBody.appendChild(row);
    }
    );

    console.log(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
}

getUsers();  