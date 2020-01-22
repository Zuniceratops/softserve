let element = document.querySelector('input');


element.addEventListener('keydown', function(event) {
   if(event.keyCode <= 57 && event.keyCode >= 48) {
       event.preventDefault()
   }

    const value = element.value;
    console.log(event.keyCode)
})
