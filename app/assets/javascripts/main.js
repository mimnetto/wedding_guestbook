
// Set the date we're counting down to
var countDownDate = new Date("Oct 28, 2017 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));


    // Output the result in an element with id="demo"
    document.getElementById("weddingCount").innerHTML = days + " Days Until Our Wedding! " ;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("weddingCount").innerHTML = "We're Married!";
    }
}, 1000);
