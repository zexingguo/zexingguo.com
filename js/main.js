$(document).ready(function() {
   $('#fullpage').fullpage({
                sectionsColor: ['#00bfff', '#00bfff', '#00ace6', '#00ace6'],
                anchors: ['home', 'resume', 'projects', 'about'],
                scrollingSpeed: 1000,
                scrollOverflow: true,
                menu: '#menu'
            });

   $(function(){
      $("#typing_text").typed({
          stringsElement: $('#typed-strings'),
          typeSpeed: 50,
          showCursor: false
      });
    });
});
