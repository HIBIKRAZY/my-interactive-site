// script.js
let balance = 100;
let inventory = [];

// Case odds and items
const cases = {
  basic: { price: 10, items: [
    { name: 'Item 1', rarity: 'Common', image: 'https://i.imgur.com/lsb8VdF.png' },
    { name: 'Item 2', rarity: 'Common', image: 'https://i.imgur.com/lsb8VdF.png' },
    { name: 'Item 3', rarity: 'Rare', image: 'https://i.imgur.com/4y63qDN.png' }
  ] },
  epic: { price: 30, items: [
    { name: 'Item 1', rarity: 'Common', image: 'https://i.imgur.com/lsb8VdF.png' },
    { name: 'Item 2', rarity: 'Rare', image: 'https://i.imgur.com/4y63qDN.png' },
    { name: 'Item 3', rarity: 'Epic', image: 'https://i.imgur.com/XQdrKoa.png' }
  ] },
  legendary: { price: 60, items: [
    { name: 'Item 1', rarity: 'Rare', image: 'https://i.imgur.com/4y63qDN.png' },
    { name: 'Item 2', rarity: 'Epic', image: 'https://i.imgur.com/XQdrKoa.png' },
    { name: 'Item 3', rarity: 'Legendary', image: 'https://i.imgur.com/uxkLQmA.png' }
  ] }
};

// Open case function
function openCase(caseType) {
  if (balance < cases[caseType].price) {
    alert('Not enough balance!');
    return;
  }

  balance -= cases[caseType].price;
  document.getElementById('balance').textContent = balance;

  const caseItems = cases[caseType].items;
  const item = caseItems[Math.floor(Math.random() * caseItems.length)];

  const resultText = `You won a ${item.name} (${item.rarity})!`;
  const resultImg = item.image;

  document.getElementById('result').innerHTML = `<p>${resultText}</p><img src="${resultImg}" alt="${item.name}">`;

  // Add item to inventory
  inventory.push(item);
  updateInventory();
}

// Update inventory display
function updateInventory() {
  const inventoryList = document.getElementById('inventory');
  inventoryList.innerHTML = '';
  inventory.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.name}</strong> (${item.rarity})<br><img src="${item.image}" alt="${item.name}" style="max-width: 100px;">`;
    inventoryList.appendChild(li);
  });
}
