document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const amount =document. getElementById('amount').value;
    const price =parseInt (amount)
   const pin = document.getElementById('pin').value
   const convertPin = parseInt(pin)
   const mainBalance =document.getElementById('main-balance').innerText;
   const convertmainBalance =parseFloat(mainBalance)


   if(convertPin === 1234){
     sum =convertmainBalance + price;
     document.getElementById('main-balance').innerText = sum ;
   }

   else{
    console.log('pin tik nai')
   }

})