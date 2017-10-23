
document.addEventListener("DOMContentLoaded", function (event) {
  //Feather Icon
  feather.replace();

  // Check Element Visibilityt
  var mobile_nav = document.querySelector('.mobile-nav');
  var burger = document.querySelector('.navbar-burger');

  burger.addEventListener("click", function () {
    var visible = mobile_nav.isVisible(mobile_nav);

    if (visible) {
      mobile_nav.classList.toggle('show-nav');
    } else {
      mobile_nav.classList.toggle('show-nav');
    }
  });


});


// Listen to Scroll and animate Circle
// window.addEventListener('scroll', function (e) {
  
//   var skills = document.querySelector('.home__skills-more');
//   let firstAppear = false;

//   if (isInViewport(skills)) {
//     if (!firstAppear) {
//       console.log('always herer', firstAppear)
//       // animateCircle();
//       firstAppear = true;
//     } else {
//       firstAppear = true
//     }
//   }

//   function isInViewport(element) {
//     var rect = element.getBoundingClientRect();
//     var html = document.documentElement;
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || html.clientHeight) &&
//       rect.right <= (window.innerWidth || html.clientWidth)
//     );
//   }

// });

// function animateCircle() {
//   //Auto animation for progress circle
//   var circles = document.querySelectorAll('.progress-circle');
//   console.log(circles);
//   var start = 1;
//   var i = 0;

//   setInterval(function () {
//     if (i < circles.length) {
//       var circle = circles[i]
//       var end = circles[i].getAttribute("data-progress")
//       circles[i].setAttribute("data-progress", start)

//       startLoad(end, circle, i)
//     }

//     else return
//     i++

//   }, 100)

//   function startLoad(end, circle) {
//     var a = 0
//     var startLoad = setInterval(function () {
//       if (a >= end) {
//         // console.log('loop end')
//         // console.log('circle: ', circle)
//         clearInterval(startLoad)
//       } else {
//         a++
//         circle.setAttribute("data-progress", a)
//       }
//     }, 10, end, circle)
//   }
// }

// Smooth Scroll in Plain Javascript
window.MobilesmoothScroll = function (target) {
  var mobile_nav = document.querySelector('.mobile-nav');
  mobile_nav.classList.toggle('show-nav');

  var scrollContainer = target;
  do { //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function (c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + (b - a) / 30 * i;
    setTimeout(function () {
      scroll(c, a, b, i);
    }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

// Smooth Scroll in Plain Javascript
window.smoothScroll = function (target) {

  var scrollContainer = target;
  do { //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function (c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + (b - a) / 30 * i;
    setTimeout(function () {
      scroll(c, a, b, i);
    }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

//Send Email
function sendMail() {
  
}