$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $("nav").css({ "background-color": "rgba(0, 0, 0, 0.651)" });
    } else {
      $("nav").css("background-color", "transparent");
    }
  });
});

$(document).ready(function () {
  $(".b-page4-part1").click(function () {
    $(".textpart1").fadeOut(function () {
      $(".card1").fadeIn();
      $(".btngroup1").fadeIn();
    });
  });

  $(".btnpage-page4").click(function () {
    $(".card1,.btngroup1").fadeOut(function () {
      $(".textpart1").fadeIn();
    });
  });

  //for page5
  $(".b-page5-part1").click(function () {
    $(".textpart2").fadeOut(function () {
      $(".card2").fadeIn();
      $(".btngroup2").fadeIn();
    });
  });

  $(".btnpage-page5").click(function () {
    $(".card2,.btngroup2").fadeOut(function () {
      $(".textpart2").fadeIn();
    });
  });

  //for page6
  $(".b-page6-part1").click(function () {
    $(".textpart3").fadeOut(function () {
      $(".card3").fadeIn();
      $(".btngroup3").fadeIn();
    });
  });

  $(".btnpage-page6").click(function () {
    $(".card3,.btngroup3").fadeOut(function () {
      $(".textpart3").fadeIn();
    });
  });
  //for page7
  $(".b-page7-part1").click(function () {
    $(".textpart4").fadeOut(function () {
      $(".card4").fadeIn();
      $(".btngroup4").fadeIn();
    });
  });

  $(".btnpage-page7").click(function () {
    $(".card4,.btngroup4").fadeOut(function () {
      $(".textpart4").fadeIn();
    });
  });

  $("#page9 #part2").mouseenter(function(){
    $("#page9 #part2 video").animate({opacity:'100%'},500);
  });
  $("#page9 #part2").mouseleave(function(){
    $("#page9 #part2 video").animate({opacity:'0%'},500);
  });
});