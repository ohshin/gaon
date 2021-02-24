
// flex를 사용 하지 못하는 하위 버전을 지원하기 위하여 아래와 같이 높이값을 지정해주는 script를 사용합니다.
$(window).ready(function(event){
	
	//scrollBox 높이값 적용
	var allH = $('body').height() - $('.header').height() - $('.footer').height();
	//scrollBox의 높이값은 body에서 header / footer를 제외한 content-wrap의 높이에서
	// content-wrap 내 scrollBox를 제외한 높이값을 지정한다.
	$('.content-wrap').children('div').not('.scrollBox').each(function(idx,div){
		var $div = $(div);
		allH -= $div.height();
	});
	$(".scrollBox").css("height",allH);


	/* 네비게이션 */	
	var $btnNavi = $('.side-menu'),
		 $allMenu = $('.all_menu'),
		 allMenuW = $allMenu.width(), 
		 $menuClose = $('.menu_close'),
		 menu_1dep = $('.menu_1dep > li'),
		 $menu_1depA = menu_1dep.find('>a');
	
	$btnNavi.on('click', function(){
		$allMenu.show().stop().animate({'right':0});
		$('body').append('<div class="dimm100"></div>');
		$('html, body').css('overflow-y','hidden');
		$menuClose.on('click', function(){
			$allMenu.stop().animate({'right':-allMenuW+'px'}, function(){
				$allMenu.hide();
				$('body .dimm100').remove();
				$('html, body').css('overflow-y','auto');
			});
		});
	});
	
	$menu_1depA.on('click', function(){
		var $this = $(this);
		var swich = false;
		if(!($this.parent().hasClass('on'))){
			menu_1dep.removeClass('on');
			$this.parent().addClass('on');
			swich = true;
		}else{
			$this.parent().removeClass('on');
			swich = false;
		}
	});

	/* 네비게이션 안에 메뉴 */
	$(".all_menu .menu > li > button").click(function(){
    	$(this).addClass('on');
    	$(this).parent().siblings().children('button').removeClass('on');
	});


	// 메인공지사항 한줄씩
	function tick(){
		$('.main-notice button:first').slideUp( function () { 
			$(this).appendTo($('.main-notice')).slideDown(); 
		});
	}
	setInterval(function(){ tick () }, 5000);

	// 메인칼러값 변경
	$('.color-choice span button').on("click", function(event){		
		$('body').removeClass();			
		$('body').addClass(event.target.className);	
	});

	// 마이페이지칼러값 변경
	$('.color-choice.check span button').on("click", function(event){		
		$(this).parent().siblings().children('button').removeClass('check');
		$(this).parent().parent().siblings().find('button').removeClass('check');
		$(this).addClass('check')
		$('body').removeClass();			
		$('body').addClass(event.target.className);	
	});

	// 팝업에 칼라값 적용 취소 버튼
	$('.pop-header .cancel').on("click", function(event){		
		$('body').removeClass();
		$('.color-choice.check span button').removeClass('check');
	});


	// 마이페이지폰트크기 변경
	$('.font-size button').on("click", function(event){		
		$(this).siblings('button').removeClass('active');
		$(this).addClass('active')
		$('html').removeClass();			
		$('html').addClass(event.target.className);	
	});

	// 팝업에 마이페이지폰트크기 적용 취소 버튼
	$('.pop-header .font-cancel').on("click", function(event){		
		$('html').removeClass();
		$('.font-size button').removeClass('active');
	});

	// select box on off
	var selectTarget = $('.custom-select');
	selectTarget.change(function(){
	var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	});
	selectTarget.on({
		'focus': function() {
			$(this).parent().addClass('focus');
		},
		'blur': function() {
			$(this).parent().removeClass('focus');
		}
	});
	selectTarget.change(function() {
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
		$(this).parent().removeClass('focus');
		$(this).find(':selected').parent().parent().addClass('focus-selected');    
	}); 

	//탭메뉴
	$('.tab-menu > button, .tabs-menu > button').click(function(){
		if($(this).hasClass == 'active'){
			return;
		}else{
			$('.tab-menu > button, .tabs-menu > button').removeClass('active');
			$(this).addClass('active');
			$(".content").scrollTop(0);
		}
	});
	
	$(".tab-menu > button:first-of-type, .tabs-menu > button:first-of-type").addClass('active');
	$(".wrap_cons > .cons").hide();
	$(".wrap_cons > .cons:first-of-type").show();

	$(".btn-footer.split > button").hide();
	$(".btn-footer.split > button:first-of-type").show();

	$(".btn-footer.div-split > div").hide();
	$(".btn-footer.div-split > div:first-of-type").show();

    $('.tab-menu button, .tabs-menu button').click(function(){
		var index = $('.tab-menu button, .tabs-menu button').index(this);	
		$('.wrap_cons > .cons:eq('+index+')').css('display','block').siblings('.wrap_cons > .cons').css('display','none');
		$('.btn-footer.split > button:eq('+index+')').css('display','block').siblings('.btn-footer.split > button').css('display','none');
		$('.btn-footer.div-split > div:eq('+index+')').css('display','-webkit-box').siblings('.btn-footer.div-split > div').css('display','none');
		
	});


	//같은 페이지에 탭메뉴 두개이상 존재시 사용
	$('.single-tab button').click(function(){
		if($(this).hasClass == 'active'){
			return;
		}else{
			$(this).siblings('.single-tab > button').removeClass('active');
			$(this).addClass('active');
			
		}
	});
	
	$(".single-tab > button:first-of-type").addClass('active');
	$(".single_cons > .cons").hide();
	$(".single_cons > .cons:first-of-type").show();
    $('.single-tab button').click(function(){
		var index = $('.single-tab button').index(this);	
		$('.single_cons > .cons:eq('+index+')').css('display','block').siblings('.single_cons > .cons').css('display','none');
		
	});

	// 버튼토글
	$('.btn-toggle button').click(function(){
		if($(this).hasClass == 'active'){
			return;
		}else{
			$(this).siblings('.btn-toggle > button').removeClass('active');
			$(this).addClass('active');
		}
	});	
	$(".btn-toggle > button:first-of-type").addClass('active');


	// 메일함 스크롤 TOP 으로
	$('#top').bind("click", function () {
		$('.content').animate({ scrollTop: 0 }, 500);
		return false;
	});
	var prevScrollTop = $(window).scrollTop()
	// 메일함 TOP버튼 스크롤시 보이게 하기
	$('.content').on('scroll', function(e) {
		var $src = $('.btn-floating-top');
		var currentScrollTop = $(this).scrollTop()
		if (currentScrollTop >= prevScrollTop && currentScrollTop > 44) {
			$src.css({
			'display': 'block'
			});
		} else {      
			$(".btn-floating-top").hide();
		}    
		prevScrollTop = currentScrollTop
	});




	// 파트커뮤니티 답글보기
	$('.btn-reply').on('click',function(){
		$(this).siblings(".reply-list").slideToggle();
		$(this).toggleClass("on");
	});

	// 탭 부분 bg 변경이 필요시 예시)MO_COED0020_2100.html
	$('.tabs-menu.hbox').on('click',function(){
		if($('.cons.bg2').css('display') == 'none'){
			$(this).parent().siblings('.btn-footer').removeClass('bg2');
			return;
			
		}else{
			$(this).parent().siblings('.btn-footer').addClass('bg2')
		}
	});


	// 교육대상자 신청확인 및 수료관리 상단 검색 부분
	$('.btn-more').on('click',function(){
		$(this).parent().siblings('.education-target-search').toggleClass("off");
		$(this).toggleClass("on");
	});

	// 신규 고객 정보 등록 추가정보
	$('.btn-add-info').on('click',function(){
		$(this).siblings('.add-information').toggleClass("active");
		$(this).toggleClass("on");
	});

	// 고객수금처리 마감내역
	$('.add-detail').on('click',function(){
		$(this).parent().siblings('.box-toggle').slideToggle();
		$(this).toggleClass("on");
	});


	// 품목정보조회 즐겨찾기
	$('.btn-item-favorite, .btn-favorite').on('click',function(){
		$(this).toggleClass("on");
	});

	// MAIT0030_P1_1000(품목필터) accordion-menu
	var allPanels = $('.accordion ul.sub').hide();
	var subPanels = $('.accordion ul.sub ul.check-list').hide();
	$('.accordion > ul > li > button').click(function() {
		if($(this).next().css('display') != 'block'){		
			//allPanels.slideUp();			
			$(this).next().slideDown();
			$(this).addClass('active').parent('dt').siblings('dt').find('a.active').removeClass('active');
		}else {
			$(this).next().slideUp();
			$(this).removeClass('active');
		}

		return false;
	});
	$('.accordion ul.sub > li > button').click(function() {
		if($(this).next().css('display') != 'block'){		
			//subPanels.slideUp();
			$(this).next().slideDown();
			$(this).addClass('active').parent('dt').siblings('dt').find('a.active').removeClass('active');
		}else {
			$(this).next().slideUp();
			$(this).removeClass('active');
		}

		return false;
	});

	
	var claimPanels = $('.subject-claim > ul.product-nav > .list > ul').hide();
	$('.subject-claim > .product-nav > .list > button').click(function() {
		if($(this).next().css('display') != 'block'){		
			claimPanels.slideUp();			
			$(this).next('ul').slideDown();
			$(this).addClass('active').parent('li').siblings('li').find('a.active').removeClass('active');
			this.checked = true;
		}else {
			$(this).next().slideUp();
			$(this).removeClass('active');
		}
		return false;
	});

	// accordion 서브 모두 열린상태
	$('.fit-menu > ul > li > button').addClass('active');
	$('.fit-menu > ul > li > button').click(function() {
		if($(this).next().css('display') != 'block'){	
			$(this).next().slideDown();
			$(this).addClass('active');
		}else {
			$(this).next().slideUp();
			$(this).removeClass('active');
			
		}

		return false;
	});


	/* MO_MACM0010_2000 radio-box 관련 div 온오프 */
	$(".cms-payment").hide();
	$("input[name$='payment_group']").click(function() {
		var test = $(this).data('in');
		//console.log(test);
		$(".cms-payment").hide();
		$("#"+test).show();
	});

	/* MO_MACM0010_2000 radio-box 관련 div 온오프 */
	$(".sales-info").hide();
	$(".sales-info.sales").show();
	$("input[name$='sales-info']").click(function() {
		var test = $(this).data('in');
		$(".sales-info").hide();
		$("#"+test).show();
	});





	//탭 상단고정	
	$(".content").scroll(function(){
		if ($(".content").scrollTop() >= 120) {
		   $('.tab-sticky').addClass('sticky');
		}
		else {
		   $('.tab-sticky').removeClass('sticky');
		}
	}); 
	// 탭 상단고정

	// 정기주문 등록 품목정보 토글 버튼
	$('.drink-toggle').on('click',function(){
		$(this).parent('li').parent('ul').parent('div').siblings(".pattern-list").slideDown();
		$(this).toggleClass("on");
	});

	// 자주묻는 질문
	var allAccordion = $('.ask-accordion > dl > dd').hide();
	$('.ask-accordion > dl > dt > button').click(function() {
		if($(this).parent().next().css('display') != 'block'){			
			allAccordion.slideUp();
			$(this).parent().next().slideDown();
			$(this).addClass('active').parent('dt').siblings('dt').find('a.active').removeClass('active');
		}else {
			$(this).parent().next().slideUp();
			$(this).removeClass('active');
		}

		return false;
	});


	$('.add-ipt button').on('click',function(){
		$(this).parent().parent().siblings(".pop-open").slideToggle();
		if( $(this).html() == '추가입력' ) {
			$(this).html('닫기');
			$(this).addClass('close');
		  }
		  else {
			$(this).html('추가입력');
			$(this).removeClass('close');			  
		  }
	  return false;
	});


	// 세일즈매니저활동및근태등록 달력 열기
	$('.more-plus-off .btn-month-more').on('click',function(){
		$(this).parent().siblings('.month-box').toggleClass("off");
		$(this).toggleClass("on");
	});

	// 세일즈매니저활동및근태등록 달력 닫기
	$('.more-plus .btn-month-more').on('click',function(){
		$(this).parent().parent().parent('.month-box').toggleClass("off");
	});

	// 세일즈매니저활동및근태등록 달력 안에 날짜 선택시 닫기
	$('.month-tbl table button').on('click',function(){
		$('body').find('.month-box').removeClass("off");
		var topval = $(this).offset().top - 128;		
		$('.month-tbl.tb-sales').animate({scrollTop : topval}, 400);
	});

	// 2021-02-19 팝업 iframe 높이값 구하기
	var bodyH = $('body').height();
	var content_iframe = $('body').height() - 100;
	$(".iframe .content.iframe").css("height",content_iframe);

	// 2021-02-19 마이페이지 radio 버튼 checked 시 하단 버튼 show hide
	$('.sample-login .switch input[type=checkbox]:checked').parent().parent().next('li').show();
	$('.sample-login .switch input[type=checkbox]').on('change',function() {
		if( $(this).is(':checked') ) {
			$(this).parent().parent().next('li').show();
		} else {
			$(this).parent().parent().next('li').hide();
		}
  });


 
 //2021-02-23 글쓰기 자동 높이 조절
function adjustHeight() {
	var textEle = $('.text-area .adjust');
	textEle[0].style.height = 'auto';
	var textEleHeight = textEle.prop('scrollHeight');
	textEle.css('height', textEleHeight);
};  
var textEle = $('textarea');
textEle.on('keyup', function() {
	adjustHeight();
});


	

});

// 2021-02-08 정보공유게시판 댓글 입력 
function resize(obj) {
	obj.style.height = "1px";
	obj.style.height = (19+obj.scrollHeight)+"px";
}



  






function layer_open(el) {		

	var $href = $(this).attr('href');
	var temp = $('#' + el);	
	//var temp_layer = $('#' + el).children(".popup-layer");
	

	if(this) {
		$('#' + el).fadeIn();
		$('#' + el).css("visibility","inherit");
		$('#' + el).find('.pop-layer').removeClass('layerclose');
		$('body').addClass('over_-h');


	} else {
		temp.fadeIn();
		$('#' + el).css("visibility","over_-h");
	}


	// $(".popup-layer").find('button.close, .pop-close, .popup-layer .cancel').click(function(e) {
	// 	if(this) {
	// 		temp.parents('.popup-layer').fadeOut();
	// 		//$(this).parents('#' + el).fadeOut();
	// 		$('body').removeClass('over_-h');
	// 	} else {
	// 		alert(22);
	// 		temp.fadeOut();
	// 	}
	// 	e.preventDefault();
	// })	
	$('.popup-layer .bg, .popup-layer .color-choice.main button, .popup-layer .btn-color-change, .popup-layer .apply, .popup-layer .font-cancel,button.close, .pop-close, .popup-layer .cancel').click(function() {
		$(this).parents('.popup-layer').find('.pop-layer').addClass('layerclose');
		$(this).parents('.popup-layer').fadeOut();		
		$('body').removeClass('over_-h');
		return false;
	});

	
};

