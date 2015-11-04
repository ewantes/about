$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 3 , //10 items above 1000px browser width
      pagination : false
     
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});
$(document).ready(function() {
 
  var owl = $("#owl-direct");
 
  owl.owlCarousel({
      items : 5, //10 items above 1000px browser width
      pagination : false
     
  });
 
  // Custom Navigation Events
  $(".next-one").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev-one").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })

 
});
