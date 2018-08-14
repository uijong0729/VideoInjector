window.onload = function() {
  var init = document.getElementById('start');

  init.onclick = function(){
    //팝업페이지가 아닌, 컨텐트 페이지를 대상으로 아래와 같은 코드를 실행한다.

  }



}

//팝업페이지가 아닌, 컨텐트 페이지를 대상으로 아래와 같은 코드를 실행한다.
//chrome.tabs.executeScript({
//  code: 'start()'
//});

/*
chrome.tabs.executeScript({
  code: 'alert("text");'

});


*/
function start(){

  //요소 제거
  document.querySelector('ytd-video-primary-info-renderer').remove();
  document.querySelector('ytd-video-secondary-info-renderer').remove();
  document.querySelector('ytd-item-section-renderer').remove();
  document.querySelector('#secondary').remove();
  document.querySelector('#container').remove();
  document.querySelector('#items').remove();
  document.querySelector('yt-next-continuation').remove();
  document.querySelector('paper-button').remove();

  //창 늘리기
  var player = document.getElementById('primary');
  player.style.margin = "0px";
  player.style.padding = "0px";

  var innerPlayer = document.getElementById('player');
  innerPlayer.style.margin = "0px";
  innerPlayer.style.padding = "0px";


  //ytp-iv-video-content 랑
  // video width 크기
  var wid = document.body.clientWidth;
  document.querySelector('.ytp-iv-video-content').style.width = wid + 'px';
  document.querySelector('video').style.width = wid + 'px';
}
