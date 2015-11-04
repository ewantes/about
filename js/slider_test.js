$(document).ready(function(){
  $("#content-slider").slider({
    animate: true,
    change: handleSliderChange,
    slide: handleSliderSlide
  });
});
function handleSliderChange(e, ui)
{
 
  var maxScroll = $("#content-scroll").prop("scrollWidth") - $("#content-scroll").width();
  $("#content-scroll").animate({scrollLeft: ui.value * (maxScroll / 100) }, 1000);
}
function handleSliderSlide(e, ui)
{
  var maxScroll = $("#content-scroll").prop("scrollWidth") - $("#content-scroll").width();
  $("#content-scroll").stop().animate({scrollLeft: ui.value * (maxScroll / 100) }, 1000);
}