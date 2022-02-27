$(document).ready(function(){

  $('.gnb > ul > li').hover(function(){
    $(this).find('.sub').stop().fadeIn();
  },function(){
    $(this).find('.sub').stop().fadeOut();
  });

  $('.s_wrap > li:last-child').insertBefore('.s_wrap > li:first-child');
  $('.s_wrap').css('margin-left','-1200px');

  function moveLeft(){
    $('.s_wrap').animate({'margin-left':'-2400px'},500,function(){
      $('.s_wrap > li:first-child').insertAfter('.s_wrap > li:last-child');
      $('.s_wrap').css('margin-left','-1200px');
    });
  }

  let Timer = setInterval(moveLeft, 3000);

});