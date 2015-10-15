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



})