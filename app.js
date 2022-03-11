const bestPrice = document.getElementById('best-price');
let memoryPrice = document.getElementById('memory-price');
const storagePrice = document.getElementById('storage-price');
const deliveryPrice = document.getElementById('delivery-price');
const totalOne = document.getElementById('total-one');
const totalTwo = document.getElementById('total-two');

const memoryZero = document.getElementById('memory-zero');
const memoryOne = document.getElementById('memory-one');
const storageZero = document.getElementById('storage-zero');
const storageOne = document.getElementById('storage-one');
const storageTwo = document.getElementById('storage-two');
const deliveryZero = document.getElementById('delivery-zero');
const deliveryOne = document.getElementById('delivery-one');

memoryZero.addEventListener('click', ()=>priceUpdate(memoryPrice,'$0'));
storageZero.addEventListener('click', ()=>priceUpdate(storagePrice,'$0'));
deliveryZero.addEventListener('click', ()=>priceUpdate(deliveryPrice, '$0'));
deliveryOne.addEventListener('click', ()=>priceUpdate(deliveryPrice, '$50'));
memoryOne.addEventListener('click', ()=>priceUpdate(memoryPrice, '$100'));
storageOne.addEventListener('click', ()=>priceUpdate(storagePrice, '$200'));
storageTwo.addEventListener('click', ()=>priceUpdate(storagePrice, '$400'));


function priceUpdate(a,b){
    a.innerText = b
    total()
    return a.innerText = b;  
}



function total(){
    const price = bestPrice.innerText.substring(1);
    const mPrice = memoryPrice.innerText.substring(1);
    const sPrice = storagePrice.innerText.substring(1);
    const dPrice = deliveryPrice.innerText.substring(1);
    const updateTotal = (parseInt(price)+parseInt(mPrice)+parseInt(sPrice)+parseInt(dPrice))
    return totalOne.innerText = `$${updateTotal}`;
}