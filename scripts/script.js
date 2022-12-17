var video = document.getElementById("video");
    var btnPlayPause = document.getElementById("btnPlayPause");
    var playButton = document.getElementById('playButton');
    video.addEventListener("play",function(){
        changeButtonType(btnPlayPause,'Pause');
        
    },false);
    video.addEventListener("pause",function(){
        changeButtonType(btnPlayPause,"Play");
        
    },false);

    function videoPlayPause(){
        if(video.paused){
            changeButtonType(btnPlayPause,"Pause");
            video.play();
        }
        else{

            changeButtonType(btnPlayPause,'Play');
            video.pause();
        }

    }
    function changeButtonType(btn,value){
        btn.title =value;
        btn.innerHTML=value;

    }
    var navbar =document.getElementById("navbar");
    window.addEventListener("scroll",scrollFunction);
    function scrollFunction(){
        if(window.scrollY>=100){
            navbar.classList.add("navbar_backgroundd");
        }
        else{
            navbar.classList.remove("navbar_backgroundd");
        }
    }