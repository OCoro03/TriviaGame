$(document).ready(function () {

    //My variables
    var time = 31;
    var intervalId;
    var right = 0;
    var wrong = 0;


    //Starts timer
    function start() {
        intervalId = setInterval(decrements, 1000);
        $("#timer").text(time);

    }function decrements() {
        time--;
        $("#timer").text(time);
        if (time === 0) {
            timeUp();
        }
    };

    decrements();

    // //Hide the questions and other contents
    $(".questions").hide();
    $("#submit").hide();
    // console.log(questions)

   // $("#timer").text(time);

    //Pressing Start btn gets main screen to show up(questions & time)
    $("#start").on("click", function () {
        start();
        $(this).hide();
        $(".questions").show();
        $("#time").show();
        $("#submit").show();
    });

    $("#submit").on("click", function () {
        $("#start").hide();
        timeUp();
        stats();

    });

    //After questions screen, right and wrong answers pop-up
    function stats() {
        var newclass = $("<div class='col-lg-4 col-lg-offset-4 text-center' id='summary'>");
        
        var done = $("<h2>").html("Hooray!! You're Done!");
        newclass.append(done);
        var gotRight = $("<p>").html("Correct answers: " + right);
        newclass.append(gotRight);
        var gotWrong = $("<p>").html("Incorrect answers: " + wrong);
        newclass.append(gotWrong);

        $("#submit").hide();
        $(".row:nth(2)").append(newclass);
    };
    // console.log(stats);

    //Once timer hit=0 screen clears
    function timeUp() {
        clearInterval(intervalId);
        $(".questions").hide();
        $("#time").hide();

    }

    // Calculate all of the answers submitted
    $("input[type=radio]").on("change", function () {
        right = $("input[value=goodanswer]:checked").length;
        wrong = $("input[value=wrong]:checked").length;
    });

});