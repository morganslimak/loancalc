$(document).ready(function() {

var r = 10/1200;
var pv = 8000;
var n = 24;

$("#slider").slider({
	range: "min",
	min: 0,
	max: 50000,
	value: 8000,
	step: 100,
	slide: function(event, ui) {
        $("#loan-val").val("$" + ui.value);
        pv = ui.value;
        calculate();
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
        n = ui.value;
        calculate();
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
        r  = ui.value/1200;
        calculate();
      }
});

$("#apr").val("10%");

function calculate() {
	var payments = (r * pv)/(1-Math.pow(1+r, -n));
	payments = Math.round(payments * 100)/100;
	var total = payments * n;
	$("#payments").val("$" + payments);
	$("#total").val("$" + total);
}

calculate();

})