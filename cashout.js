document.getElementById('cashout-bnt').addEventListener('click', function (event){
event.preventDefault();

const pin =parseInt(document.getElementById('cashout-pin').value)
const amount =parseFloat(document.getElementById('cashout-amount').value)
const balance =parseFloat(document.getElementById('main-balance').innerText)

if(pin===1234){
 const sum =balance -amount;
 document.getElementById('main-balance').innerText = sum
}
else{
    alert('enter valide pin')
}
})