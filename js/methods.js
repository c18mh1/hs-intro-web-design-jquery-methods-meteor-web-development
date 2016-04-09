// initialize jQuery command after all page elements load

$(function(){

//go to: http://api.jquery.com to read about each of the methods below and then set the apropriate button to apply the method to the content below it.

  //hide
  $("#b1").click(function(){
    $("#p1").hide(1000);
  });

  //show
  $("#b2").click(function()
  {
    $("#p1").show(1000);
  }
  );

  //toggle
  $("#b3").click(function() {

  $("#p1").toggle();

  });

  //css

  $("#b4").click(function(){

    $("#p2").css("font-size", "15px");

  });


  //css (multiple property changes)

  $("#b5").click(function()
  {

    $("#p2").css("font-size" : "20px", "font-color" : "purple");

  });

  //html

  $("#b6").click(function()
   {

    $("#p3").html(<p> "Hello" </p>);

  });

  //prepend

    $("#b7").click(function()
      {

      $("#p3").prepend(<p>HELLO</p>);

    });

  //append

 $("#b8").click(function()
      {

      $("#p3").prepend(<p>GOODBYE</p>);

    });


  //before

 $("#b9").click(function()
      {

      $("#p4").before(<p>hi</p>);

    });

  //after

 $("#b10").click(function()
      {

      $("#p4").after(<p> bye </p>);

    });

  //wrap

    $("#b11").click(function()
      {

      $("#p5").wrap();

    });



  //addClass

 $("#b12").click(function()
      {

      $("#p5").addClass();

    });


  //clone

 $("#b13").click(function()
      {

      $("ul > li").clone();

    });

  //fadeOut

 $("#b14").click(function()
      {

      $("#p6").fadeOut();

    });

  //fadeIn

    $("#b15").click(function()
      {

      $("#p6").fadeIn();

    });


  //fadeToggle

 $("#b16").click(function()
      {

      $("#p6").fadeToggle();

    });

  //slideUp

    $("#b17").click(function()
      {

      $("#box-content").slideUp();

    });


  //slideDown

 $("#b18").click(function()
      {

      $("#box-content").slideDown();

    });

   //slideToggle

 $("#b19").click(function()
      {

      $("#box-header").slideToggle();

    });


  //animate

    $("#b19").click(function()
      {

      $(".container").animate();

    });


});