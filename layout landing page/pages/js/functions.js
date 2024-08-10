$(function () {
  $(".flex.center").click(function () {
    $(".header:last-of-type div .inline-block")
      .slideToggle()
      .css("display", "inline-block");

    setTimeout(() => {
      $(".header:last-of-type div .inline-block").slideToggle();
    }, 4000);
  });

  // MUDAR TITULO A CADA 3s
  setInterval(() => {

    setTimeout(() => {
      $("title").html("Landing");
    }, 1000);

    setTimeout(() => {
      $("title").html("LAndinG");
    }, 2000);

    setTimeout(() => {
      $("title").html("LAndiNG");
    }, 3000);

    setTimeout(() => {
      $("title").html("LANdiNG");
    }, 4000);

    setTimeout(() => {
      $("title").html("LANdING");
    }, 5000);

    setTimeout(() => {
      $("title").html("LANDING");
    }, 5000);

    setTimeout(() => {
      $("title").html("LANDING");
    }, 6000);

    setTimeout(() => {
      $("title").html("");
    }, 7000);

    setTimeout(() => {
      $("title").html("P");
    }, 8000);

    setTimeout(() => {
      $("title").html("PA");
    }, 9000);

    setTimeout(() => {
      $("title").html("PAG");
    }, 10000);

    setTimeout(() => {
      $("title").html("PAGE");
    }, 11000);
  }, 1000, 12000);

});
