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
//home
//projects
        jQuery(document).ready(function () {

            $(function () {
                $(".visible-information").click(function () {
                    $(this).toggleClass("active-visible-information");
                })
            });
        });
        //archive
        jQuery(document).ready(function () {

            $(function () {
                $(".year-span").click(function () {
                    $(this).toggleClass("active-year-span");
                })
            });
        });
 $(document).ready(function() {

        $('#ddmenu li').hover(function() {
            clearTimeout($.data(this, 'timer'));
            $('ul', this).stop(true, true).slideDown(0);
        }, function() {
            $.data(this, 'timer', setTimeout($.proxy(function() {
                $('ul', this).stop(true, true).slideUp(0);
            }, this), 100));
        });

    });
 function up() {
        var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        if (top > 0) {
            window.scrollBy(0, ((top + 100) / -10));
            t = setTimeout('up()', 30);
        } else clearTimeout(t);
        return false;
    }
    //search
    jQuery(document).ready(function() {

        $(function() {
            $(".search").click(function() {
                $(this).toggleClass('search-opened');
                $(".search-active").toggleClass("active-search-toggle");
                $(".input-search").focus();
            })

            $(".close-search-new").click(function() {
                $(".search-active").removeClass("active-search-toggle");
            })
        });
    });
    //search
    jQuery(document).ready(function() {

        $(function() {
            $(".cross-search").click(function() {
                $(".search-active").toggleClass("active-search-toggle");
            })
        });
    });
    // maps
    var map;
    var egglabs = new google.maps.LatLng(50.4523817, 30.5264717);
    var mapCoordinates = new google.maps.LatLng(50.4523817, 30.5264717);


    var markers = [];
    var image = new google.maps.MarkerImage(
        'img/maps.png',
        new google.maps.Size(60, 80),
        new google.maps.Point(0, 0),
        new google.maps.Point(42, 56)
    );

    function addMarker() {
        markers.push(new google.maps.Marker({
            position: egglabs,
            raiseOnDrag: false,
            icon: image,
            map: map,
            draggable: false
        }));


    }


    function initialize() {
        var mapOptions = {
            backgroundColor: "#ffffff",
            zoom: 17,
            disableDefaultUI: true,
            center: mapCoordinates,
            mapTypeId: google.maps.MapTypeId.ROADMAP,



        };

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        addMarker();

    }
    google.maps.event.addDomListener(window, 'load', initialize);



  // select-box
  $("select").selectBoxIt({
   theme: "bootstrap"

});
$("select").bind({

    // Binds to the 'open' event on the original select box
    "open": function() {

      // Adds the Twitter Bootstrap 'dropup' class to the drop down
      $(this).data("selectBox-selectBoxIt").dropdown.addClass("dropup");

    },

    // Binds to the 'close' event on the original select box
    "close": function() {

      // Removes the Twitter Bootstrap 'dropup' class from the drop down
      $(this).data("selectBox-selectBoxIt").dropdown.removeClass("dropup");

    }

  });

//home
