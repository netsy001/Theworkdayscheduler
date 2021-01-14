
$(document).ready(function () { //To get code start functioning. 

    // defining a function to get current time.
    function getTime() {
        //using moment methods to get date and time formats and storing in variable clock
        var clock = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(clock);
    }
    //using setInterval method to getTime functioned every second.
    setInterval(getTime, 1000);
    //diffrentiating the time blocks as past present and future classes. Looping from each row.
    $(".row").each(function () {
        //using moment methods to call current hour and store in currentTime variable.
        var currentTime = moment().hour();
        //Using parseInt function to parse a string and return as an integer.
        //this to get to object. .attr is used to get html data attribute data-hour of that block time.
        var time = parseInt($(this).attr("data-hour"));
        //using loclStorage to get time block in which event is stored.
        $(this).children('textarea').val(localStorage.getItem(time));
        //conditions to differentiate time.
        if (time < currentTime) {
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
    //saving events into localStorage on clicking saveBtn.
    $(".saveBtn").click(function () {
        //siblings method is used to get input event from textarea. As textarea is siblings of saveBtn.
        //while parent is used as data-hour attribute is parent to saveBtn.
        var inputValue = $(this).siblings('textarea').val();
        var input = $(this).parent().attr('data-hour');
        localStorage.setItem(input, inputValue);
        
    });
    
});

