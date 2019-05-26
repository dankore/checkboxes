const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
   //Check if Shift key is down AND if checkbox is checked!
   let inBetween = false;
   
   if(e.shiftKey && this.checked) {
       //Loop over every checkbox
   checkboxes.forEach(checkbox => {
       let currentChecked = this;
         if(checkbox === currentChecked || checkbox === lastChecked) {
               inBetween = !inBetween;
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