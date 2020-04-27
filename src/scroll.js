document.addEventListener('scroll', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
  
    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', myFunction);
    var header = document.getElementById("container");
var sticky = header.offsetTop;
window.onscroll = function() {myFunction()};



function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
})


document.addEventListener('scroll', function() {

  window.addEventListener('scroll', scrollFunction);

  var mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};

  
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.getElementById("myBtn").onclick = function 
topFunction(){


    if(window.scrollY!=0)
    {
        setTimeout(function() {
           window.scrollTo(0,window.scrollY-30);
            topFunction();
        }, 10);
     }
  }

// When the user clicks on the button, scroll to the top of the document


})




// When the user scrolls down 20px from the top of the document, show the button


