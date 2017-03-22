$(document).ready(function() {
   $('#fullpage').fullpage({
                sectionsColor: ['#00bfff', '#00bfff', '#00ace6', '#00ace6'],
                anchors: ['home', 'resume', 'projects', 'about'],
                scrollingSpeed: 1000,
                scrollOverflow: true,
                menu: '#menu',

                //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
                easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
            });

   $(function(){
      $("#typing_text").typed({
          stringsElement: $('#typed-strings'),
          typeSpeed: 50,
          showCursor: false
      });
    });
});

