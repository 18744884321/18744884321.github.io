$(function(){
	//点击上古遗迹跳转
   $('.main_a1').click(function(){
   	$('.content').fadeOut();
   	$('.content2').fadeIn();
   });
    //点击宿命传承跳转
   $('.main_a2').click(function(){
    $('.content').fadeOut();
   	$('.content3').fadeIn();
   })
   //点击next跳转
   $('.p1,.p2').click(function(){
   	$('.content2').fadeToggle();
   	$('.content3').fadeToggle();
   });
  //点击top跳转
  $('.p12').click(function(){
  	$('.content2,.content3').fadeOut();
  	$('.content').fadeIn();
  });

  $('.main2_right_p2').hover(function(){
  	$('.main2_right_a2').animate({'top':'-110px'});
  },function(){
  	$('.main2_right_a2').animate({'top':'16px'});
  })

   $('.ziliao span').hover(function(){
   	$('.ziliao span b').css({'color':'#737373'});
   	$(this).children('b').css({'color':'#fff'});
   	$('.ziliao span img').css({'display':'none'});
   	$(this).children('img').css({'display':'block'});
   });

   $('.content2 .main2_nav li').click(function(){
      $(this).css({'background':'url(images/yd02.png)'});
      $(this).siblings('li').css({'background':'url(images/yd01.png)'});
      $('.content2 .main2_data').slideUp(50);
      $('.content2 .main2_data').eq($(this).index()).slideDown();
   })

   $('.content3 .main2_nav li').click(function(){
      $(this).css({'background':'url(images/yd02.png)'});
      $(this).siblings('li').css({'background':'url(images/yd01.png)'});
      $('.content3 .main2_data').slideUp(50);
      $('.content3 .main2_data').eq($(this).index()).slideDown();
   })

})