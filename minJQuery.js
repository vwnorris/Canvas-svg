//jQuery

//Viser svgtekst og skjuler canvastekst
$(document).ready(function () {
  $("svg").click(function () {
    $("#pSvg").show();
    $("#pCanvas").hide();
  });
});

//Viser canvastekst og skjuler svgtekst
$(document).ready(function () {
  $("#mittCanvas").click(function () {
    $("#pCanvas").show();
    $("#pSvg").hide();
  });
});

//Gjemmer stjernene i svg
$(document).ready(function () {
  $(".star").click(function () {
    $(".star").hide();
  });
});

//Viser stjernene igjen
$(document).ready(function () {
  $(".sol").click(function () {
    $(".star").show();
  });
});

//Initienerer å skjule de tre tekstene
$(document).ready(function () {
  $("#dokumentasjon").hide();
  $("#pSvg").hide();
  $("#pCanvas").hide();
});

//Viser og skjuler dokumentasjonen
$(document).ready(function () {
  $(".documentationButton").click(function () {
    $("#dokumentasjon").toggle();
    $("#pCanvas").hide();
    $("#pSvg").hide();
  });
});
