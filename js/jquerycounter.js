

$().ready(() => {
    let nbr = 0;
    console.log("Counter with jQuery!");
    $("h1").text("Counting with jQuery!");
    $("#h0").html("<span style='color:red;'> Ready with jQuery using ID!</span>");
    $(".ABC").css("color", "blue").css("font","Gothic").css ("font-style", "italic")
    $("#nbr").val(nbr)
//hook the click event for minus
    $("#decrement").click(() => {
        
        var nbr= $("#nbr").val();
       
      
        $("#nbr").val(--nbr);
         
        
    });
        
      //hook the click event for plus
    $("#increment").click(() => {
        let Ctrl =$("#nbr")
        var nbr= Ctrl.val();
        
       
        Ctrl.val(++nbr);
         
        
        
        
         });
         

        //  Ctrl.css = ((nbr %2==0) ? "red" : "black")
        //             fontWeight = (nbr %3==0) ? "bold" : "normal";
        //             fontStyle = (nbr %5==0) ? "italic" : "normal";
        
 });
// var display = () => {


    
   




