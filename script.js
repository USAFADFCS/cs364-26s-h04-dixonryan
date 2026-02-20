// FILE: script.js

// complete the TODO comments

// Get references to page elements
const button = document.getElementById("makeSmoothie");
const outputDiv = document.getElementById("output");

// Helper function to display messages on the page
function showMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;
  outputDiv.appendChild(p);
}

// Helper function that returns a Promise that resolves after a delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* =========================
   PART 1 — PROMISE FUNCTIONS
========================= */

// Step 1: Get ingredients
function getIngredients() {
  // TODO:
  // 1. Show message: "Gathering ingredients..."
  // 2. Wait 2 seconds using wait()
  // 3. Resolve with "Ingredients ready"

  showMessage("Gathering ingredients...\n");

  return new Promise((resolve, reject) => {
    wait(2000).then(() => {
      resolve(showMessage("Ingredients ready"));
    });
  });
}

// Step 2: Blend smoothie
function blendSmoothie() {
  // TODO:
  // 1. Show message: "Blending smoothie..."
  // 2. Wait 3 seconds
  // 3. Sometimes FAIL (see assignment instructions)
  // 4. Otherwise resolve with "Smoothie blended"
showMessage("Blending smoothie...\n");

  return new Promise((resolve, reject) => {
    chance = Math.floor(Math.random() * 3);
    wait(3000).then(() => {
      //showMessage('Change result '+chance)

      if(chance == 0){
        reject(showMessage("ERROR: Blender broke!"))
      }
      else{
      resolve(showMessage("Smoothie blended"));
      }
    });
  });
}

// Step 3: Pour smoothie
function pourSmoothie() {
  // TODO:
  // 1. Show message: "Pouring into cup..."
  // 2. Wait 1 second
  // 3. Resolve with "Smoothie is ready!"

  showMessage("Pouring into cup...");

  return new Promise((resolve, reject) => {
    wait(1000).then(() => {
      resolve(showMessage("Smoothie is ready!"));
    });
  });
}

/* =========================
   PART 2 — PROMISE CHAIN VERSION
========================= */

function makeSmoothieWithPromises() {
  outputDiv.innerHTML = ""; // Clear previous messages

  // TODO: Chain the steps in order using .then()
   getIngredients().then(blendSmoothie).then(pourSmoothie).catch();
}

/* =========================
   PART 3 — ASYNC/AWAIT VERSION
========================= */

async function makeSmoothieAsync() {
  outputDiv.innerHTML = ""; // Clear previous messages

  // TODO:
  // Use try/catch
  try{
    await getIngredients()
    await blendSmoothie()
    await pourSmoothie()
  }
  // Show final success message
  // Catch and display any errors
  catch (error){
    
  }
}

button.addEventListener("click", makeSmoothieAsync);
