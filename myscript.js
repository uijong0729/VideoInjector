//content_scripts는 새로운 페이지가 불렸을 때 실행되는 자바스크립트
(function remover(){
  try
  {
    document.querySelector('ytd-browse').style.display = 'none';
  }
  catch(exception)
  {
    console.log('ytd-browse was not founded');
  }

  try{
    document.querySelector('ytd-video-primary-info-renderer').style.display = 'none';
  }
  catch(ex)
  {
    console.log(ex);
  }

  try{
    document.querySelector('#secondary').style.display = 'none';
  }
  catch(exception)
  {
      console.log(exception);
  }

  try{
    document.querySelector('#items').style.display = 'none';
  }
  catch(exception)
  {
    console.log(exception);
  }

  try{
    //마진제거
    var player = document.getElementById('primary');
    player.style.margin = "0px";
    player.style.padding = "0px";

    var innerPlayer = document.getElementById('player');
    innerPlayer.style.margin = "0px";
    innerPlayer.style.padding = "0px";

  }
  catch(exception){
      console.log(exception);
  }


})();
