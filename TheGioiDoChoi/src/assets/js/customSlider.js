
function slider(min, max, values){
  console.log("Dang vao phuong thucccccccc");
  if ($("#slider-range").length !== 0) {
    $("#slider-range").slider({
      range: true,
      min: min,
      max: max,
      values: values,
      slide: function (event, ui) {
        $("#cost-from").text(formatCurrency(ui.values[0]));
        $("#cost-to").text(formatCurrency(ui.values[1]));
      }
    });
    $("#cost-from").text(formatCurrency($("#slider-range").slider("values", 0)));
    $("#cost-to").text(formatCurrency($("#slider-range").slider("values", 1)));
  }
}
