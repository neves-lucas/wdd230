// Check if visits count exists in localStorage
let visitsCount = localStorage.getItem('visitsCount');

// If not, set counter to 0
if(!visitsCount) {
  visitsCount = 0;
}

// Increment counter
visitsCount++;

// Update localStorage
localStorage.setItem('visitsCount', visitsCount); 

// Get element to display count
const countEl = document.getElementById('visits');

// Display updated count
countEl.textContent = visitsCount;