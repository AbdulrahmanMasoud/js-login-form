



/************************************/
/* login page */

function validat(){
    var email = document.getElementById('email'),
        pass  = document.getElementById('pass'),
        error = document.getElementById('error');
       

        if(email.value == '' || pass.value == ''){
            error.innerHTML = 'Pleas entr Email and Pass';
            error.classList.remove('d-none','alert-success','alert-danger');
            error.classList.add('alert-warning');
            email.style.color = '#ffc107';
            pass.style.color = '#ffc107';

        }else{

            if(email.value =='user' && pass.value == 'root'){
                error.innerHTML = 'Login Success';
                error.classList.remove('d-none','alert-warning','alert-danger');
                error.classList.add('alert-success');
                email.style.color = '#28a745';
                pass.style.color = '#28a745';
                

            }else{
                error.innerHTML = 'Pass or emair Wrong';
                error.classList.remove('d-none','alert-warning','alert-success');
                error.classList.add('alert-danger');
                email.style.color = '#dc3545';
                pass.style.color = '#dc3545';
                
            }
        }
}


/*********************************/
/*signIn();*/

function signIn(){
    var overleay = document.getElementById('overleay');
    overleay.style.transform = "translate(75%, 0px) skewX(-35deg)";
    overleay.style.width= '72%';
    document.getElementById('signin').classList.add('d-none');
    document.getElementById('title').classList.add('d-none');
}

