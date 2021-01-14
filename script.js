
$(document).ready(function () {
    
    function getTime() {
        var clock = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(clock);
    }
    setInterval(getTime, 1000);

$(".row").each(function(){
    var currentTime = moment().time();
    console.log(currentTime)
    var time =$(".time-block").attr("id");
    console.log(time)
    if (this.time < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (this.timeNow === currentTime) {
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
});