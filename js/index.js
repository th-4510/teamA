document.addEventListener('DOMContentLoaded', function () {
	const loading = document.querySelector( '.loading' );
    window.addEventListener( 'load', () => {
    loading.classList.add( 'hide' );
}, false );
$(function() {
	setTimeout(function(){
		$('.logo_fadein p').fadeIn(1000);
	},500);
	setTimeout(function(){
		$('.logo_fadein').fadeOut(1000);
	},2500);
});
    
    
}, false);