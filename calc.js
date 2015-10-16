$(document).ready(function() {

$("#slider").slider({
	range: "min",
	min: 0,
	max: 50000,
	value: 8000,
	step: 100,
	slide: function(event, ui) {
        $("#loan-val").val("$" + ui.value);
      }
});

$("#loan-val").val("$8000");

$("#slider2").slider({
	range: "min",
	min: 12,
	max: 120,
	value: 24,
	slide: function(event, ui) {
        $("#time").val(ui.value + " Months (~" + Math.floor((ui.value/12)) + " Yr)");
      }
});

$("#time").val("24 Months (~2 Yr)");

$("#slider3").slider({
	range: "min",
	min: 0,
	max: 40,
	value: 10,
	step: .1,
	value: 10,
	slide: function(event, ui) {
        $("#apr").val(ui.value + "%");
      }
});

$("#apr").val("10%");



})