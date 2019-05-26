const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
   //Check if Shift key is down AND if checkbox is checked!
   let inBetween = false;
   
   if(e.shiftKey && this.checked) {
       //Loop over every checkbox
   checkboxes.forEach(checkbox => {
           console.log(checkbox);
           
           if(checkbox === this || checkbox === lastChecked) {
               inBetween = !inBetween;
               console.log('START!')
           }
           if(inBetween) {
               checkbox.checked = true;
           }
       });
   }
    
    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck)
})