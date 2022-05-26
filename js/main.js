$(function(){
  function burg(){
    var burgerWr = $('.burger-wrap'),
      burgerBtn = $('.burger-btn'),
      burgerBody = $('.burger-body'),
      burgerCloseBtn = $('.burger-close-btn');
    
    burgerBtn.on('click', function(){
      $(burgerWr).addClass('opened');
      $('html').addClass('owh');
    });
    
    burgerCloseBtn.on('click', function(){
      $(burgerWr).removeClass('opened');
      $('html').removeClass('owh');
    })
  }
  
  burg();

  $(document).on('click', function(e){
    if( $(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
    return;
    
    $('.burger-wrap').removeClass('opened');
    $('html').removeClass('owh');
  });
  $('.js_rev_sl').on("init", function(event, slick){
    $(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
  });

  $('.js_rev_sl').on("afterChange", function(event, slick, currentSlide){
      $(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
  });
  $('.js_rev_sl').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      fade: true,
  });
  $('.js_ab_sl').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      variableWidth: true
  });
  (function() {
    
    function coords(str) {
        return str.split(',');
    }


    function init(options) {
        options.center = coords(options.center);

        $.each(options.data, function(key, item) {
            item.coords = coords(item.coords);
        });

            google.maps.event.addDomListener(window, 'load', function() {
                
                var map = new google.maps.Map(document.getElementById(options.id), {
                    zoom: parseInt(options.zoom),
                    scrollwheel: false,
                    center: new google.maps.LatLng(options.center[0], options.center[1])
                });
                
                var styles1 = [
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f7f1df"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#d0e3b4"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbd3da"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bde6ab"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe15f"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#efd151"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "black"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#cfb2db"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#a2daf2"
                    }
                ]
            }
            ];
            
            map.setOptions({styles: styles1});

                $.each(options.data, function(key, item) {
                    

                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(item.coords[0], item.coords[1]),
                        map: map,
                        title: item.name
                    });

                    var infowindow = new google.maps.InfoWindow({
                        content: '<div class="baloon-content">' +
                                    '<h3 style="margin: 0; padding-bottom: 3px;">' + item.name + '</h3>' +
                                    item.desc +
                                '</div>'
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });

                });
            });

    }

    window.mjsMap = init;

})();
});