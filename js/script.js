// tooltip初始化
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// 顶部导航栏高度变化
(function(){
	var $body=$('body');
	var $navbarBrand=$('.navbar-reset,.navbar-reset .navbar-brand');
	var $navbarIcon=$('#nav .icon-crown');
	var $navbarToggle=$('.navbar-reset .navbar-toggle');
	var $navbarALink=$('.navbar-reset .navbar-nav > li > a');

	$(window).on('scroll',function(){
		var scrollTop=$(document).scrollTop();
		if(scrollTop>50){
			// console.log(scrollTop);
			$navbarBrand.css({height:'60px'});
			$body.css({'margin-top':'60px'});
			$navbarIcon.css({'line-height':'50px'});
			$navbarToggle.css({'top':'5px'});
			$navbarALink.css({'height':'60px','line-height':'60px'});
		}else{
			$navbarBrand.css({height:'80px'});
			$body.css({'margin-top':'80px'});
			$navbarIcon.css({'line-height':'65px'});
			$navbarToggle.css({'top':'15px'});
			$navbarALink.css({'height':'80px','line-height':'80px'});
		}
	});
})();

// (function(){
// 	$('.index').click(function(){
// 		$('#carousel').html('');
// 		$('#member').html('');
// 		$('#musicVideo').html('');
// 		$('#waterfall').html('');
// 		$('#leaveMessage').html('');

// 		$.get('index-data.html',function(data){
// 			console.log(data);
// 			$('#carousel').html(data)
// 		})
// 	});
// 	$('.member').click(function(){
// 		$('#carousel').html('');
// 		$('#member').html('');
// 		$('#musicVideo').html('');
// 		$('#waterfall').html('');
// 		$('#leaveMessage').html('');

// 		$.get('member-data.html',function(data){
// 			console.log(data);
// 			$('#member').html(data)
// 		})
// 	})
// 	$('.musicv').click(function(){
// 		$('#carousel').html('');
// 		$('#member').html('');
// 		$('#musicVideo').html('');
// 		$('#waterfall').html('');
// 		$('#leaveMessage').html('');

// 		$.get('musicVideo-data.html',function(data){
// 			console.log(data);
// 			$('#musicVideo').html(data)
// 		})
// 	})
// 	$('.waterfall').click(function(){
// 		$('#carousel').html('');
// 		$('#member').html('');
// 		$('#musicVideo').html('');
// 		$('#waterfall').html('');
// 		$('#leaveMessage').html('');

// 		$.get('waterfall-data.html',function(data){
// 			console.log(data);
// 			$('#waterfall').html(data)
// 		})
// 	})
// 	$('.leavemessage').click(function(){
// 		$('#carousel').html('');
// 		$('#member').html('');
// 		$('#musicVideo').html('');
// 		$('#waterfall').html('');
// 		$('#leaveMessage').html('');

// 		$.get('leaveMessage-data.html',function(data){
// 			console.log(data);
// 			$('#leaveMessage').html(data)
// 		})
// 	})
// })();