const menuRef = document.querySelector('#menu')
const cartRef = document.querySelector('#cart')
const noitemsRef = document.querySelector('#no-items')
//const removeBtn = document.querySelector('button')

const menuA = [
  {name: 'Hamburger', price: 2.99},
  {name: 'Cheeseburger', price: 3.99},
  {name: 'Cheese Pizza', price: 3.99},
  {name: 'Pepperoni Pizza ', price: 4.99},
  {name: 'Sausage Pizza', price: 4.99},
  {name: 'Caesar Salad', price: 3.99},
  {name: 'Fries', price: 1.99},
  {name: 'Onion Rings', price: 2.49}
];

const cartA = [];

function checkCart () {
  if (cartA.length > 0) {
    noitemsRef.style.display = 'none';
  } else {
    noitemsRef.style.display = 'block';
  }
}

checkCart();

// if (cartA.length === 0) {
//   noitemsRef.textContent = 'No items';
// }

function addToCart() {
    cartRef.innerHTML = '';
    for (let i = 0; i < cartA.length; i++) {
      const li = document.createElement('li');
      li.textContent = cartA[i].name + ' - $' + cartA[i].price;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = '-';
      removeBtn.addEventListener('click', function() 
      {
        RemoveFromCart(i);
    });
        li.appendChild(removeBtn);
        cartRef.appendChild(li);
    }

    const Total = cartA.reduce((list, item) => list + item.price, 0);
    const total = document.createElement('li');
    total.innerHTML = '<h4>Total: $' + Total.toFixed(2) + '</h4>';
    cartRef.appendChild(total);

    checkCart();
}

function RemoveFromCart(index) {
    cartA.splice(index, 1);
    addToCart();
}

for (let i = 0; i < menuA.length; i++) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = ' + ';
    btn.addEventListener('click', function() {
        cartA.push(menuA[i]);
        addToCart();
    });
    li.appendChild(btn);
    const span = document.createElement('span');
    span.textContent =  menuA[i].name + ' - $' + menuA[i].price;
    li.appendChild(span);
    menuRef.appendChild(li);
  }
