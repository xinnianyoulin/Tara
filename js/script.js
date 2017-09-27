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

// news-loading
// 
(function(){
	var curPage=1;
	getNewsList(1)
	function getNewsList(page){
		$.ajax({
			url:'https://idol.yinyuetai.com/article/artist-articles?&artistId=1559&page='+page+'&pageSize=10',
			dataType:'jsonp',
			type:'GET',
			success:function(data){
				// console.log(data);
				// console.log(data.articles);

				var data=data.articles;
				
				for (var i = 0; i < data.length; i++) {
					var str='';
					
						str+='<div class="row">';
							str+='<div class="news-image col-md-5 col-sm-5 col-xs-12">';
								str+='<a href="http://news.yinyuetai.com/article/'+data[i].id+'" target="_blank">';
									str+='<img class="media-object" src="'+data[i].image+'" alt="...">';
								str+='</a>';
							str+='</div>';
							str+='<div class="news-info col-md-7 col-sm-7 col-xs-12">';
								str+='<h4 class="news-heading">';
									str+='<p class="news-title">';
										str+='<a href="http://news.yinyuetai.com/article/'+data[i].id+'" target="_blank">'+data[i].title+'</a>';
									str+='</p>';
									str+='<span class="news-date">音悦台&nbsp;&nbsp;&nbsp;&nbsp;'+data[i].datetime+'</span>';
								str+='</h4>';
								str+='<div class="news-details">';
									str+='<a href="http://news.yinyuetai.com/article/'+data[i].id+'" target="_blank">'+data[i].summary+'</a>';
								str+='</div>';
							str+='</div>';
						str+='</div>';

					$('<div class="news-item"></div>').html(str).appendTo($('.news-content'));
				}
				// console.log(str);
					
			},
			error:function(){
				console.log('error');
			}
		})
	}


	// loading-more-news
	var $loading=$('.loading-more');
 	$loading.on('click',function(){
 		// console.log($(this));
 		$(this).html('');
 		$(this).css({
 			'background-image': 'url(images/loadingMore.gif)',
			'background-color': 'rgb(252,210,88)',
 		});
 		setTimeout(function(){
 			curPage++;
 			getNewsList(curPage);
 			$loading.html('点击加载更多内容');
 			$loading.css({
 			'background-image': '',
			'background-color': '',
 		});
 		},1200);
 	})

})()

