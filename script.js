
$(document).ready(function () {

    function getTime() {
        var clock = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(clock);
    }
    setInterval(getTime, 1000);

    $(".row").each(function () {
        var currentTime = moment().hour();
        // console.log(currentTime)
        var time = parseInt($(this).attr("data-hour"));
        // console.log(time)
        if (time < currentTime) {
            // console.log(time)
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (time === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });

    $(".saveBtn").click(function () {
      var inputValue = $(".description").value;
      localStorage.setItem(".description", inputValue);
      $(".description").text(localStorage.getItem("inputValue"));
    $(".saveBtn").click(empty);
    });
});

