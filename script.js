// Variables
const date = $("#currentDay")
let textArea = document.querySelectorAll("textarea");
const now = moment().format("MMM Do YYYY");
const clock = +(moment().format('H'));

//Today's date shown on top of screen
date.text(now);
// Checks time and colorizes the time boxes
for(let i=0; i < textArea.length; i++){
    let timeColor = +(textArea[i].id)
    if (timeColor < clock) {
        textArea[i].classList.add("past");
    }
    else if (timeColor > clock) {
        textArea[i].classList.add("future");
    }
    else {
        textArea[i].classList.add("present");
    }
    
}
// Save buttons that send each section to local storage
$("#8amBtn").on("click", function(){
    let eightTask = $("#8").val();
    localStorage.setItem("8am", eightTask);
})
$("#9amBtn").on("click", function(){
    let nineTask = $("#9").val();
    localStorage.setItem("9am", nineTask);
})
$("#10amBtn").on("click", function(){
    let tenTask = $("#10").val();
    localStorage.setItem("10am", tenTask);
})
$("#11amBtn").on("click", function(){
    let elevenTask = $("#11").val();
    localStorage.setItem("11am", elevenTask);
})
$("#12pmBtn").on("click", function(){
    let noonTask = $("#12").val();
    localStorage.setItem("12pm", noonTask);
})
$("#1pmBtn").on("click", function(){
    let oneTask = $("#13").val();
    localStorage.setItem("1pm", oneTask);
})
$("#2pmBtn").on("click", function(){
    let twoTask = $("#14").val();
    localStorage.setItem("2pm", twoTask);
})
$("#3pmBtn").on("click", function(){
    let threeTask = $("#15").val();
    localStorage.setItem("3pm", threeTask);
})
$("#4pmBtn").on("click", function(){
    let fourTask = $("#16").val();
    localStorage.setItem("4pm", fourTask);
})
$("#5pmBtn").on("click", function(){
    let fiveTask = $("#17").val();
    localStorage.setItem("5pm", fiveTask);
})

// Retrieval of local storage
$("#8").text(localStorage.getItem("8am"));
$("#9").text(localStorage.getItem("9am"));
$("#10").text(localStorage.getItem("10am"));
$("#11").text(localStorage.getItem("11am"));
$("#12").text(localStorage.getItem("12pm"));
$("#13").text(localStorage.getItem("1pm"));
$("#14").text(localStorage.getItem("2pm"));
$("#15").text(localStorage.getItem("3pm"));
$("#16").text(localStorage.getItem("4pm"));
$("#17").text(localStorage.getItem("5pm"));

/*
1. compare, (using if statements), the now value, to the IDs of each div. if it's less than the current time, add "past" class. if it's more than, add "future"

2. on click of the save button in each div, you need to store the value of the adjacent textarea,AND push it to localstorage

3. localStorage.setItem("name of the id","value be the text area"). on load of the page, check if the corresponding localStorage has a value. if yes, then populate the textarea with it. hint: make value = localStorage value
*/