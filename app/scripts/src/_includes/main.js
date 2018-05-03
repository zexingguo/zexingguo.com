
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
