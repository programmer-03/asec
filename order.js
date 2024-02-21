let orderList = [];
let totalAmount = 0;

function orderPizza(pizzaType, price) {
    const orderItem = `${pizzaType} - ₹${price.toFixed(2)}`;
    orderList.push(orderItem);
    totalAmount += price;
    
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderListElement = document.getElementById('order-list');
    const totalAmountElement = document.getElementById('total-amount');
    
    orderListElement.innerHTML = '';
    orderList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        orderListElement.appendChild(listItem);
    });

    totalAmountElement.textContent = totalAmount.toFixed(2);
}

// ... (existing code) ...

function clearCart() {
    orderList = [];
    totalAmount = 0;
    updateOrderSummary();
}

function proceedToCheckout() {
    // You can add logic here to navigate to the checkout page or perform further actions
    alert('Proceeding to Checkout!'); // Placeholder alert, replace with actual logic
}

function logout() {
    // You can add logic here to redirect to the logout page or perform other logout actions
    alert('Logging out!'); // Placeholder alert, replace with actual logic
    window.location.href = "index.html";
}
