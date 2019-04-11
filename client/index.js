function jokes(){
    $.ajax({
        url:'http://localhost:3000/search',
        method:'GET',
    })
    .done(function(response){
    
        response.forEach(jokes =>{
            console.log(jokes);
            $('#jokes-list').append(`<li>${jokes.joke}</li>`)
        })
        
    })  
    .fail(function(textStatus){
        console.log('request failed', textStatus);
        
    })
}

function createUser(){
    event.preventDefault()

    const email = $('#formEmail').val()
    const password = $('#formPassword').val()

    $.ajax({
        url : `http://localhost:3000/POST/register`,
        method:'POST',
        data : { email : email,
                 password : password }
    })
    .done(function(){
        console.log('login success');
        
       $('#alertRegistered').prepend('#formUser')
       swal('success')
       $('#id01').hide()
    })
    .fail(function(textStatus){
        console.log('request failed', textStatus);  
    })
}
function login(){
    
    event.preventDefault()
    const email = $('#username').val()
    const password = $('#password').val()
    $.ajax({
        url: `http://localhost:3000/POST/login`,
        method:'POST',
        data :{
            email : email,
            password: password
        }
    })
    .done(function(response){
        console.log('you logged in');
        swal('success')         
     })
     .fail(function(err){
         console.log('request failed', err);
         
     })
}
$(document).ready(function(){
    if(localStorage.getItem('token'))
    jokes()
    $('jokes-form').submit(function(){
        
    })
})