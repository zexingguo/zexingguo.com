$( document ).ready(function() {


  $('#toggleStyle').click(function(e){
            e.preventDefault();
            if($('link')[0].hasAttribute('href')){
                $('link').removeAttr("href");
                $('#toggleStyle').html('Style with CSS');
            }
            else{
                $("link").attr("href","./css/style.css");
                $('#toggleStyle').html('Try no css');
            }

  });


    // Set the date we're counting down to
    var countDownDate = new Date("Mar 25, 2017 11:15:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    days = days * 24;
    hours += days;
    // Output the result in an element with id="demo"
    $("#countDown").html(hours + " Hours "
    + minutes + "m " + seconds + "s");

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        $("#countDown").html("ClASS STARTS");
      }
  }, 1000);

});
