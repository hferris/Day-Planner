(moment().format("dddd, MMM Do YYYY, h:mm:ss a"));
console.log();

var currentDay = moment().format("dddd, MMM Do YYYY, h:mm:ss A")
document.querySelector("#currentDay").innerText = currentDay

$("time-block").each(function (){
    var id = $(this).attr("id");
    
    var storedDescription = localStorage.getItem(id);
    console.log(storedDescription);

    $(this).children("textarea").val(storedDescription);
    
    console.log(id);
    });

    $(".saveBtn").on("click", function (){
      var id = $(this).parent().attr("id");
      var description = $(this).siblings("textarea").val();
      localStorage.setItem(id, description);
      console.log(description);
      console.log(id);
    });

var TimeInsert = [
    { hour: 9, insert: "Get ready and attend office hours" },
    { hour: 10, insert: "Start class" },
    { hour: 11, insert: "Breakout room" },
    { hour: 12, insert: "Lunch" },
    { hour: 1, insert: "Class starts again" },
    { hour: 2, insert: "Go over student activities and talk about homework" },
    { hour: 3, insert: "Office hours" },
    { hour: 4, insert: "Screen break" },
]

    