const password = document.getElementById('password')
const confirmation = document.getElementById('password_confirm')

confirmation.addEventListener('input', (event)=>{
    if(password.value!==confirmation.value){
        confirmation.classList.add('error')
        confirmation.setCustomValidity('The passwords do not match')
        confirmation.reportValidity()
        confirmation.blur()
    }
    else{
        password.classList.remove('error')
    }
})