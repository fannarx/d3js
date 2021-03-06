 // _.map - is from underscore lib.
var dataset = _.map(_.range(75), function(i){
  return Math.random() * 50;
})

var multiplier = 5;
var w = 400, h = 300;

var svg = d3.select('#chartArea').append('svg')
            .attr('width', w)
            .attr('height', h);

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset) * 1.1])
    .range([0, h]);

var colorScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range(['orange', 'purple']);

var xScale = d3.scale.ordinal()
    .domain(dataset)
    .rangeBands([0, w], 0.1, 0);

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', function (d) {
    return xScale(d);
  })
  .attr('y', function(d){
    return h - yScale(d);
  })
  .attr('width', xScale.rangeBand())
  .style('height', function(d) {
    return yScale(d);
  })
  .attr('fill', colorScale);
