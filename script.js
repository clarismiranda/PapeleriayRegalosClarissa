var c=0;
function cambiaImg(){
    $("#imagen").attr("src",imgArr[c]);
    if (!document.images)
    return;
    document.getElementById('imagen').src = imgArr[c].src;
    if(c<2){
	    c++;
	    }
  	  else{
    	c = 0;
	    }
    setTimeout("cambiaImg()", 3000);
}
var map;
function initMap() {
    map= new google.maps.Map(document.getElementById('gmap'), {
          center: {lat: 21.876602, lng: -102.308489},
          zoom: 8
        });
}
var imgArr = new Array();
imgArr[0]=new Image();
imgArr[0].src="Images/Slide/Image1.png";
imgArr[1]=new Image();
imgArr[1].src="Images/Slide/Image2.png";
imgArr[2]=new Image();
imgArr[2].src="Images/Slide/Image3.png";

$(document).ready(function(){
    cambiaImg();
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
    $("#bContacto").click(function(){
        $('#bContacto').addClass('active');
        $('#bInicio').removeClass('active');
    });
    $("#bInicio").click(function(){
        $(window).scrollTop($('#Inicio').offset().top);
        $('#bInicio').addClass('active');
        $('#bContacto').removeClass('active');
    });
    $(window).resize(function(){

       if ($(window).width() <= 780) {  

              $("#imagen").height(136);
              $("#imagen").width(242);
              $("#logo").height(53.4);
              $("#logo").width(177.6);
       }
       else{
           $("#imagen").height(362);
           $("#imagen").width(645);
           $("#logo").height(106.8);
           $("#logo").width(355.2);
       }     

});
});
