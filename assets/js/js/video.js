var video = document.getElementById('video');
function fadeout(){
    video.classList.toggle('fade')
}

function hide(){
    video.style.display='none';
}

setTimeout(fadeout, 1000);
setTimeout(hide,2000);

emailjs.init('user_7OwO7RZVcmL8jxzMapH8P');

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        var response = grecaptcha.getResponse();
        event.preventDefault();
        
        if(response != 0){
        
            emailjs.send('default_service','template_v4kspbp',{
                from_name: this.from_name.value,
                message: this.message.value,
                reply_to: this.replay_to.value,
                'g-recaptcha-response': response
            });

            document.getElementById('success').style.display='block';
        } 
        
        this.reset();
    });
}

