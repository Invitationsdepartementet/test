$(function() {

  $destinationButton = $(".js-go-to-dinner");

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
      selectCityWithNameOrRegion(data.city, data.regionName);
  });

  function selectCityWithNameOrRegion(cityName, cityRegion) {
    // Find a city with an identical name in the option group, and select it
    var selection = $(".js-cities-group option[value='" + cityName +"']");

    // If no city is available with the same name, use the region as a name (could be .e.g Stockholm)
    if (!selection.length && cityRegion) {
      selection = $(".js-cities-group option[value='" + cityRegion +"']");
    }
    
    // If no selection, abort
    if (!selection.length) { return; }

    // Set it to selected
    selection.prop('selected', true);
    updateDestinationButtonFromSelectedOption();
  }

  $(".js-destination-dropdown").change(function(e) {
    updateDestinationButtonFromSelectedOption();
  });

  // Update CTA button to go to page for chosen destination
  function updateDestinationButtonFromSelectedOption() {
    var selected = $(".js-destination-dropdown option:selected");
    $destinationButton.attr("href", selected.attr("data-url"));
  }

});
