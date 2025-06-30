// Select input fields and buttons
const itemInput = document.getElementById('itemInput');
const indexInput = document.getElementById('indexInput');
const listDisplay = document.getElementById('listDisplay');

let myList = [];

function renderList() {
  listDisplay.innerHTML = ''; // Clear the existing list in HTML

  myList.forEach((item, index) => {
    const li = document.createElement('li'); // Create a new <li> element
    li.textContent = `${index}: ${item}`; // Example: "0: Apple"
    listDisplay.appendChild(li); // Add <li> to the <ul>
  });
}

function addToEnd() {
  const value = itemInput.value.trim(); // Get what the user typed, and remove extra spaces

  if (value) {
    myList.push(value); // Add to end of array
    itemInput.value = ''; // Clear the input field in the UI
    renderList(); // Update the HTML list
  }
}

function addToStart() {
    const value = itemInput.value.trim();

    if (value) {
        myList.unshift(value); // Add to the start of array
        itemInput.value = ''; // Clear the input field in the UI
        renderList(); // Update HTML list
    }
}

function removeFromStart() {
    myList.shift();
    renderList();
}

function removeFromEnd() {
    myList.pop();
    renderList();
}