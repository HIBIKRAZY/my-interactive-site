// Simulate box data
const boxes = [
  { id: 1, category: 'electronics', name: 'Electronics Box', price: 50 },
  { id: 2, category: 'fashion', name: 'Fashion Box', price: 40 },
  { id: 3, category: 'gaming', name: 'Gaming Box', price: 60 },
  { id: 4, category: 'sneakers', name: 'Sneakers Box', price: 100 }
];

// Function to display mystery boxes dynamically
function displayBoxes(boxes) {
  const boxListing = document.querySelector('.box-listing');
  boxListing.innerHTML = '';  // Clear previous boxes

  boxes.forEach(box => {
      const boxDiv = document.createElement('div');
      boxDiv.classList.add('box');
      boxDiv.innerHTML = `
          <h3>${box.name}</h3>
          <p>$${box.price}</p>
          <button class="buy-box" onclick="buyBox(${box.id})">Buy Now</button>
      `;
      boxListing.appendChild(boxDiv);
  });
}

// Function to filter boxes by category
document.querySelectorAll('.category').forEach(button => {
  button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      const filteredBoxes = boxes.filter(box => box.category === category);
      displayBoxes(filteredBoxes);
  });
});

// Function to simulate purchasing a box
function buyBox(id) {
  const box = boxes.find(box => box.id === id);
  alert(`You bought the ${box.name} for $${box.price}!`);
}

// Display all boxes initially
displayBoxes(boxes);