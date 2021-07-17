let colors = ["green", "red", "blue", "violet", "yellow", "orange", "indigo"];
var colorToggle = false;
var cardToggle = false;
var controlToggle = false;
var energy = 100;
var health = 100;

$(".top, .middle, .bottom").on("click", function(event) {
    event.preventDefault();
    currNum = parseInt($(this).text());
    if (currNum > 0) {
        $(this).text(currNum - 1);
    }
})

$("#shuffle").on("click", function(event) {
    event.preventDefault();
    shuffleArray(colors);
    var i = 0;
    $(".middle").each(function() {
        $(this).css("background-color", colors[i]);
        i++;
    });
})

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
}

$("#colors").on("click", function(event) {
    event.preventDefault();
    $(".overlay").toggle();
    $("#colorInfo").toggle();
    colorToggle = true;
})

$("#cards").on("click", function(event) {
    event.preventDefault();
    $(".overlay").toggle();
    $("#cardInfo").toggle();
    cardToggle = true;
})

$("#controls").on("click", function(event) {
    event.preventDefault();
    $(".overlay").toggle();
    $("#controlInfo").toggle();
    controlToggle = true;
})

$(".overlay").on("click", function(event) {
    event.preventDefault();
    if (colorToggle) {
        $(".overlay").toggle();
        $("#colorInfo").toggle();
        colorToggle = false;
    } else if (cardToggle) {
        $(".overlay").toggle();
        $("#cardInfo").toggle();
        cardToggle = false;
    } else if (controlToggle) {
        $(".overlay").toggle();
        $("#controlInfo").toggle();
        controlToggle = false;
    }
})

$("#draw").on("click", function(event) {
    event.preventDefault();
    if (energy > 0) {
        shuffleArray(colors);
        $("#cardHolder").css("background-color", colors[0]);
        if (colors [0] === "green") {
            currNum = parseInt($("#hexagon1").text());
            $("#hexagon1 .middle").text(currNum + 1)
        } else if (colors[0] === "red") {
            currNum = parseInt($("#hexagon2").text());
            $("#hexagon2 .middle").text(currNum + 1)
        } else if (colors[0] === "indigo") {
            currNum = parseInt($("#hexagon3").text());
            $("#hexagon3 .middle").text(currNum + 1)
        } else if (colors[0] === "orange") {
            currNum = parseInt($("#hexagon4").text());
            $("#hexagon4 .middle").text(currNum + 1)
        } else if (colors[0] === "blue") {
            currNum = parseInt($("#hexagon5").text());
            $("#hexagon5 .middle").text(currNum + 1)
        } else if (colors[0] === "violet") {
            currNum = parseInt($("#hexagon6").text());
            $("#hexagon6 .middle").text(currNum + 1)
        } else if (colors[0] === "yellow") {
            currNum = parseInt($("#hexagon7").text());
            $("#hexagon7 .middle").text(currNum + 1)
        }
        energy--;
        $("#energyInfo").text("Energy: " + energy);
        $("#energy").css("background", "linear-gradient(90deg, rgb(111, 111, 218) " + energy + "%, rgb(136, 136, 136) " + (100 - energy) + "%");
    }
})
