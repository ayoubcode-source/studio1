// Handle quantity increase and decrease
document.querySelectorAll('.quantity-increase').forEach(button => {
    button.addEventListener('click', function() {
        const quantityInput = this.previousElementSibling;
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = ++quantity;
        updateTotal(this);
    });
});

document.querySelectorAll('.quantity-decrease').forEach(button => {
    button.addEventListener('click', function() {
        const quantityInput = this.nextElementSibling;
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = --quantity;
            updateTotal(this);
        }
    });
});

// Update total price for the item
function updateTotal(element) {
    const tr = element.closest('tr');
    const price = parseFloat(tr.querySelector('td:nth-child(3)').textContent.replace('$', ''));
    const quantity = parseInt(tr.querySelector('.quantity').value);
    tr.querySelector('.total').textContent = `$${(price * quantity).toFixed(2)}`;
}

// Handle item removal
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('tr').remove();
    });
});
