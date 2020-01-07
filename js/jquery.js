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
    headerColor: 'linear-gradient(to right, #add6ff, #ffadd6)',
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