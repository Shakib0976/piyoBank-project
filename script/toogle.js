document.getElementById('add-money-card').style.display='block'
document.getElementById('tranjection-card').style.display='none'




document.getElementById('add-money-box').addEventListener('click', function (event){
    event.preventDefault();
    document.getElementById('add-money-card').style.display='block'
    document.getElementById('tranjection-card').style.display='none'

})

document.getElementById('tranjection-box').addEventListener('click', function(){
   

   
    document.getElementById('add-money-card').style.display='none'
    document.getElementById('tranjection-card').style.display='block'

    
    
})
