//スキルバー
$(function () {
    $(".iziModal_group").iziModal({
        group: "group01",
        loop: true,
        width: '1000px',
        background: 'rgba(255,255,255,0.8)',
        overlayColor: 'rgba(150, 150, 150, 0.8)',
        borderBottom: false,
        navigateCaption: false,

        //header
        headerColor: 'linear-gradient(to right, hsl(210, 100%, 62%), hsl(330, 100%, 84%))',
        iconColor: '#535353',
    });

    $('.skill').on('inview', function () {
        $('.skillbar').skillBars({
            from: 0, // バーの動くスタート位置
            speed: 2500, // 動くスピード
            interval: 100, // 動き始めるまでの時間
        });
    })

})




// ポートフォリオ(ファーストビュー)
const typing = (element, sentence) => {
	[...sentence].forEach((character, index) => {
        setTimeout(() => {
            document.querySelector(element).textContent += character;
        }, 160 * ++index);
    });
}

typing('#typing', 'PORTFOLIO');



//スライド
// 対象となる要素
const target = document.querySelector('.text');
// 対象となる要素
const target1 = document.querySelector('.text1');
// 画面下部からの閾値
const target2 = document.querySelector('.text2');
const target3 = document.querySelector('.text3');
const threshold = 200;

window.addEventListener('scroll', () => {
    if (window.innerHeight > target.getBoundingClientRect().top + threshold) {
        target.classList.remove('loading');
    }
    if (window.innerHeight > target1.getBoundingClientRect().top + threshold) {
        target1.classList.remove('loading1');
    }
    if (window.innerHeight > target2.getBoundingClientRect().top + threshold) {
        target2.classList.remove('loading2');
    }
    if (window.innerHeight > target3.getBoundingClientRect().top + threshold) {
        target3.classList.remove('loading3');
    }
});
