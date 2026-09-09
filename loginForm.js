let email = document.querySelector('.email')
let pass = document.querySelector('.pass')
let btn = document.querySelector('.btn')
let error = document.querySelector('.error')
let perror = document.querySelector('.perror')
btn.addEventListener('click',function(){
    if(email.value === 'test@gmail.com' && pass.value ==='1234'){
        alert('Login Succesful welcome back')
    }
    else{
       error.innerText ='invalid email'
       perror.innerText ='invalid password'
    }
    pass.value='';
    email.value='';
    
})