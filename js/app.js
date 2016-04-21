$(function() {

  $(".js-button-play-movie").click(function(e) {
    e.preventDefault();
    $(".js-video-overlay")
      .addClass("video-overlay-active")
      .append('<iframe class="js-vimeo-iframe" src="https://player.vimeo.com/video/141152511?autoplay=1&title=0&byline=0" width="1020" height="574" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  });

  $(".js-video-overlay").click(function(e) {
    $(".js-vimeo-iframe").remove();
    $(this).removeClass("video-overlay-active");
  });

  $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
      selectCityWithName(data.city);
  });

  function selectCityWithName(cityName) {
    // Find a city with an identical name in the option group, and select it
    $(".js-cities-group option[value='" + cityName +"']").prop('selected', true);
    updateDestinationButton();
  }

  $(".js-destination-dropdown").change(function(e) {
    updateDestinationButton();
  });

  function updateDestinationButton() {
    alert("Dropdown changed");
  }
  
});
