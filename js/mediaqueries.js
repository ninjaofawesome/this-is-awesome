$(document).ready(function() {

  function checkWidth() {
    var windowSize = $(window).width();
    if (windowSize < 421) {
     console.log('smallest');
      $('.presto-changeo').css({
        'background-color': '#FF0000',
        'color' : '#FFFF00'
      });
    } else if (windowSize >= 421 && windowSize <= 768){
      console.log('smaller');
      $('.presto-changeo').css({
        'background-color': '#00FF00',
        'color' : '#FF0000'
      });
    } else {
      console.log('not so small');
      $('.presto-changeo').css({
        'background-color': '#FFF',
        'color' : '#000'
      });
    }
  }

  checkWidth();
  $(window).resize(checkWidth);

});








