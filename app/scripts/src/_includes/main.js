
document.addEventListener("DOMContentLoaded", function (event) {
  //Feather Icon
  feather.replace();

  
  
});

function animateCircle() {
  //Auto animation for progress circle
  var circles = document.querySelectorAll('.progress-circle');
  console.log(circles);
  var start = 1;
  var i = 0;

  setInterval(function () {
    if (i < circles.length) {
      var circle = circles[i]
      var end = circles[i].getAttribute("data-progress")
      circles[i].setAttribute("data-progress", start)

      test(end, circle, i)
    }

    else return
    i++

  }, 100)

  function test(end, circle) {
    var a = 0
    var startLoad = setInterval(function () {
      if (a >= end) {
        // console.log('loop end')
        // console.log('circle: ', circle)
        clearInterval(startLoad)
      } else {
        a++
        circle.setAttribute("data-progress", a)
      }
    }, 20, end, circle)
  }
}