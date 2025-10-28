// Grab elements once
const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");
const mouseTracker = document.getElementById("mouseTracker");
const coordinates = document.getElementById("coordinates");

// Helpers for messages/styles
function showSuccess(message) {
  outputDiv.textContent = message;
  outputDiv.style.backgroundColor = "green";
  outputDiv.style.color = "white";
  outputDiv.style.borderColor = "green";
}

function showError(message) {
  outputDiv.textContent = message;
  outputDiv.style.backgroundColor = "transparent";
  outputDiv.style.color = "red";
  outputDiv.style.borderColor = "red";
}

// Core submit handler
function handleSubmit() {
  const name = nameInput.value.trim();
  if (!name) {
    showError("Error: Please enter a name.");
    return;
  }
  showSuccess(`Welcome, ${name}!`);
}

// Click event
submitButton.addEventListener("click", handleSubmit);

// Keyboard: submit on Enter (but only if there’s input)
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // Prevent form-ish behavior and keep it consistent
    e.preventDefault();
    handleSubmit();
  }
});

// Mouse tracker: report coordinates relative to the box
mouseTracker.addEventListener("mousemove", (e) => {
  const rect = mouseTracker.getBoundingClientRect();
  const x = Math.floor(e.clientX - rect.left);
  const y = Math.floor(e.clientY - rect.top);
  coordinates.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});

// Optional: reset coordinates when mouse leaves the box
mouseTracker.addEventListener("mouseleave", () => {
  coordinates.textContent = "Mouse Coordinates: X: 0, Y: 0";
});