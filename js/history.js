// document.addEventListener('DOMContentLoaded', function () {
//     const targets = document.getElementsByClassName('tab');
//     for (let i = 0; i < targets.length; i++) {
//         targets[i].addEventListener('click', changeTab, false);
//     }
//     // タブメニューボタンをクリックすると実行
//     function changeTab() {
//         // タブのclassを変更
//         document.getElementsByClassName('is-active')[0].classList.remove('is-active');
//         this.classList.add('is-active');
//         // コンテンツのclassの値を変更
//         document.getElementsByClassName('is-display')[0].classList.remove('is-display');
//         const arrayTabs = Array.prototype.slice.call(targets);
//         const index = arrayTabs.indexOf(this);
//         document.getElementsByClassName('content')[index].classList.add('is-display');
//     };
// }, false);


document.addEventListener('DOMContentLoaded', function () {
    const targets = document.getElementsByClassName('tab');
    const quizLink = document.getElementById('quiz-link');
    const quizUrls = [
        'history_quiz/saitama_quiz.html',  // 埼玉
        'history_quiz/hukusima_quiz.html',  // 福島
        'history_quiz/nigata_quiz.html',  // 新潟
        'history_quiz/mie_quiz.html',  // 三重
        'history_quiz/kanagawa_quiz.html',  // 神奈川
        'history_quiz/china_quiz.html'  // 中国
    ];

    for (let i = 0; i < targets.length; i++) {
        targets[i].addEventListener('click', changeTab, false);
    }
    quizLink.href='history_quiz/saitama_quiz.html'
    function changeTab() {
        // タブのclassを変更
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        this.classList.add('is-active');
        // コンテンツのclassの値を変更
        document.getElementsByClassName('is-display')[0].classList.remove('is-display');
        const arrayTabs = Array.prototype.slice.call(targets);
        const index = arrayTabs.indexOf(this);
        document.getElementsByClassName('content')[index].classList.add('is-display');
        // クイズリンクのhref属性を変更
        quizLink.href = quizUrls[index];
    };
    
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
