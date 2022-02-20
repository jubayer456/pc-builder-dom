
function onClick(clickId, costField1, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        priceDetails(costField1, price);
        document.getElementById(clickId).style.background = "cornflowerblue";
    });
}
onClick('sixteenGB', 'memory-cost', 300);
onClick('ssd2', 'storage-cost', 250);
onClick('ssd3', 'storage-cost', 400);
onClick('paid-delivery', 'delivery-cost', 20);
function totalCost() {
    const bestPrice = document.getElementById('best-price').innerText;
    const extraMemory = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalCost = parseInt(bestPrice) + parseInt(extraMemory) + parseInt(storageCost) + parseInt(deliveryCost);
    return totalCost;
}
function priceDetails(costField1, price) {
    const costField = document.getElementById(costField1);
    costField.innerText = price;
    // costField.style.background = "cornflowerblue";
    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText = totalCost();
}
const fakeCode = 'cupon20';
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoCopde = document.getElementById('promo-input').value;
    const validation1 = document.getElementById('applied-text1');
    const validation2 = document.getElementById('applied-text2');
    if (promoCopde === fakeCode) {
        const total = document.getElementById('total-price');
        const discount = parseInt(total.innerText) * .2;
        const totalCost = parseInt(total.innerText) - discount;
        total.innerText = totalCost;
        validation1.style.display = 'block';
        validation2.style.display = 'none';
    }
    else {
        validation1.style.display = 'none';
        validation2.style.display = 'block';
    }

})


