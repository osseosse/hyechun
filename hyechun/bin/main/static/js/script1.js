
var uAgent = navigator.userAgent.toLowerCase();
var mobilePhones = new Array('iphone','ipod','ipad','android','blackberry','windows ce',
							'nokia','webos','opera mini','sonyericsson','opera mobi','iemobile');
							
for(var i=0;i<mobilePhones.length;i++) {
	if(uAgent.indexOf(mobilePhones[i]) != -1) {
		console.log('mobile');
		document.getElementById("slidesToShow").value = 1;
		break;
	}else{
		document.getElementById("slidesToShow").value = 2; /* 숫자컨트롤 */
	}
}



var sickPrimary = {
      autoplay: true,
      autoplaySpeed: 2400,
      slidesToShow: $('#slidesToShow').val(),//2, //PC에서는 2, M 1로 노출 (992px 부터)
      slidesToScroll: 1,
      speed: 1800,
      cssEase: 'cubic-bezier(.84, 0, .08, .99)',
      asNavFor: '.text-slider',
      centerMode: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
}

var sickSecondary = {
      autoplay: true,
      autoplaySpeed: 2400,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1800,
      cssEase: 'cubic-bezier(.84, 0, .08, .99)',
      asNavFor: '.image-slider',
      prevArrow: $('.prev'),
      nextArrow: $('.next')
}

$('.image-slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary);

