//-------------------Carousel Beginning----------------------------//

window.addEventListener('load',function(){
  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: '.carousel__indicadores',
    arrows: {
    prev: '.carousel__anterior',
    next: '.carousel__siguiente'
  },
  rewind: true
  });
  const glider = new Glider(document.getElementById('glider'));
  function sliderAuto(slider, miliseconds) {
    const slidesCount = slider.track.childElementCount;
    let slideTimeout = null;
    let nextIndex = 2;
   
    function slide () {
      slideTimeout = setTimeout(
        function () {
          if (nextIndex >= slidesCount ) {
            nextIndex = 0;
          }
          slider.scrollItem(nextIndex++);
        },
        miliseconds
      );
    }
   
    slider.ele.addEventListener('glider-animated', function() {
      window.clearInterval(slideTimeout);
      slide();
    });
   
    slide();
   }
   
   sliderAuto(glider, 3500)
});

//-------------------Carousel End----------------------------//


//-------------------Send Mail Beginning----------------------------//

function confirmation(){
    var confirma = confirm("You are about to send an email, are you sure?")
    if (confirma==true){
        sendMail();} 
        else{
        alert("Do not hesitate to send us an email! Keep in contact");
    }
}


function sendMail() {
    var link = "mailto:guestparticipant005@gmail.com"
             + "?cc="
             + "&subject=Support Ticket" + encodeURIComponent("")
             + "&body=You're about to send us a support ticket. Please, in the following lines, tell us your name and contact information, and explain in detail in what can we precisely help you. We'll try to contact you as soon as possible."+ encodeURIComponent(document.getElementById('mail').value)
    ;
    
    window.location.href = link;
}

//-------------------Send Mail End----------------------------//

//-------------------About Us beginning----------------------------//
let video = document.querySelector('video');
  window.addEventListener('scroll' , function(){
    let value = 1 + window.scrollY/-2700;
    video.style.opacity = value;
} )
//-------------------About us end----------------------------//