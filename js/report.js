$(function() {

  new Chartist.Line('.ct-chart', {
  labels: ['Jan 2015', 'Feb', 'Mars', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Okt', 'Nov', 'Dec', 'Jan 2016', 'Feb', 'Mars', 'Apr'],
  series: [
    [0, null, null, null, null, null, null, null, null, null, null, 629, null, null, 518+629]
    ]
  }, {
    fullWidth: true,
    low: 0,
    lineSmooth: Chartist.Interpolation.cardinal({ fillHoles: true }),
    showArea: true,
    chartPadding: {
      right: 40
    }
  });

  new Chartist.Bar('.chart-orter', {
    labels: ['Stockholm', 'Malmö', 'Borås', 'Luleå', 'Kramfors'],
    series: [426, 62, 16, 9, 6]
  }, {
    distributeSeries: true
  });

  new Chartist.Line('.chart-amb', {
  labels: ['Jan 2015', 'Feb', 'Mars', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Okt', 'Nov', 'Dec', 'Jan 2016', 'Feb', 'Mars', 'Apr'],
  series: [
    [0, null, null, null, null, null, null, null, null, null, null, 27, null, null, 38]
    ]
  }, {
    fullWidth: true,
    low: 0,
    lineSmooth: Chartist.Interpolation.cardinal({ fillHoles: true }),
    showArea: true,
    chartPadding: {
      right: 40
    },
    axisY: {
      onlyInteger: true
    }
  });

  
});
