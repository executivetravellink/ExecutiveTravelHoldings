(function ($) {
	var showOrHide = true;
    $(document).ready(function () {
      $(".content").addClass("peak");
      $("#slider").backstretch([
    		"http://www.executivetravelholdings.com/assets/img/millennium.jpg"
    		, "http://www.executivetravelholdings.com/assets/img/the-clinton-miami.jpg"
    		, "http://www.executivetravelholdings.com/assets/img/rosen-shingle-creek.jpg"
    	], {duration: 3000, fade: 750});
      $(".menu").on("click", function(){
        $('.mobile').slideToggle();
      });
      $('#tabs div').hide();
      $('#tabs div:first').show();
      $('#tabs ul li:first').addClass('active');

      $('#tabs ul li a').on('click', function(){
        $(this).parent().addClass('active');
        var currentTab = $(this).attr('href');
        $('#tabs div').hide();
        $(currentTab).show();
        return false;
      });
      var map;
      function initialize() {
        var mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(28.68480, -81.53185),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          draggable: false,
          scrollwheel: false,
          overviewMapControl: true,
          minZoom: 13,
          maxZoom: 20
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

          var image = new google.maps.MarkerImage('http://www.executivetravelholdings.com/favicon.ico',
            new google.maps.Size(129, 42),
            new google.maps.Point(0, 0),
            new google.maps.Point(18,42)
          );
          var marker1 = new google.maps.Marker({
          position: new google.maps.LatLng(28.68480,-81.53185),
          map: map
        });
          google.maps.event.trigger(map, 'resize');
          map.setZoom( map.getZoom() );
      }

      google.maps.event.addDomListener(window, 'load', initialize);
    });
})(jQuery);