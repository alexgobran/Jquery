// ready is a method on the jQuery object that executes after the entire html is loaded;
//excutes when button is clicked

$().ready(() => {
    console.log("Ready with jQuery!");
    $("h1").text("Ready with jQuery!");
    $("#h0").html("<span style='color:red;'> Ready with jQuery using ID!</span>");
    $(".ABC").css("color", "blue").css("font","Gothic").css ("font-style", "italic")


    $("#displayname").click(() => {
        var input = $("#in").val();
         $("#out").val(input);
         
        
        });
        
    //text represents the innertext property we used in pure JS
    //add();
});

// > const list = () => (

// );

// > const add = () => (

// );