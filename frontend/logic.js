const API_BASE_URL = "http://localhost:3000/api"; // change if needed

const form = document.getElementById("userForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    age: document.getElementById("age").value,
    bankacc: document.getElementById("bankacc").value,
  };

  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const data = await response.json();

    // ✅ SUCCESS MESSAGE
    message.textContent = "User successfully added!";
    message.style.color = "green";

    form.reset();

  } catch (error) {
    // ❌ ERROR MESSAGE
    message.textContent = "Credential error!";
    message.style.color = "red";

    console.error(error);
  }
});

async function getUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
}

getUsers();