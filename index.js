$(document).ready(function(){
                
       var video = document.getElementById('camVideo')
       
       if(Hls.isSupported())
           {				
               hlsArr = new Hls();
               hlsArr.loadSource( $(video).attr('data-video') );
               hlsArr.attachMedia(video);
               hlsArr.on(Hls.Events.MANIFEST_PARSED,function()
               {
                   video.play();
               });
           }
       else if (video.canPlayType('application/vnd.apple.mpegurl'))
           {
               video.src = $(video).attr('data-video');
               hlsArr = video.play();
           }
    });
