
$(document).ready(function () {
    var clock = moment().format('MMMM Do YYYY, h:mm:ss a');
    function getTime() {
        // var clock = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(clock);
    }
    setInterval(getTime, 1000);


    // var time = moment().hour();
    $(".time-block").each(function () {
        if (this.data - hour < clock) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (this.data - hour === clock) {
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
