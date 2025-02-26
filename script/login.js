document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
   const number = document.getElementById('account-Number').value;
   const pinNumber = document.getElementById('pin').value;
   const pin = parseInt(pinNumber);

   if(number.length === 11){
    if(pin===1234){
        window.location.href='./main.html';
    }
    else{
        alert('pin tik nai')
    }
   }
   else{
    alert('number tik nai')
   }
})