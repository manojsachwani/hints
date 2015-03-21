$(document).ready(function(){
    var blLineHeight = $("body").css("line-height");
    var openHint = false;
    blLineHeight = blLineHeight.substring(0,blLineHeight.length-2);
    $(".better-links img").parent("a").css("border-bottom","none");
    $(".better-links").on("click",function(e){
        showElementId = $(this).attr("data-box-id");
        showPosition = $(this).position();
        parentPosition = $(this).width()/2;
        rotateButton = $(this).children("img");
        rotateButton.addClass('wpbox_rotate wpbox_transition');
       
        if($("#"+showElementId).css("display")=="none"){
          parentPosition = ((showPosition.left + parentPosition) - ($("#"+showElementId).width()/2) - 6)
            
            $(".wphints-data-box").css("display","none");
            $("#"+showElementId).css("top",showPosition.top+parseInt(blLineHeight)+5);
            $("#"+showElementId).css("left",parentPosition);
            
            $("#"+showElementId).css("display","block");    
            $("#"+showElementId+" > span.wphints-triangle").css("margin-left","50%");
            openHint = true;

        }else{
            openHint = false;
            rotateButton.addClass('wpbox_rotate wpbox_transition');
            $(".wphints-data-box").css("display","none");
            $("#"+showElementId).css("display","none"); 
            $(".wphints-plus-button").removeClass("wpbox_rotate wpbox_transition");
        }
        
    });
   
    
});