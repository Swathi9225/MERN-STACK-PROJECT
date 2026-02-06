 let click =true
 click_button.addEventListener('click', () => {
   if (click) {
       click_button.value = 'Submitted'
     click = false
   } else {
       click_button.value = 'Click me'
       click = true
   }
})
