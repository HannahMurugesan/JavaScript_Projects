$(document).ready(function(){
    $("#cal-btn").click(function(){
        let height = $("#hei-val").val();
        let weight = $("#wei-val").val();

        /*formula for BMI calculation:
        weight(kg)/[height(m)]**2
        or
        (weight(kg)/height(cm)/height(cm))*10000 */

        let output= (weight/height/height)*10000;

        $(".output").html("Your BMI is "+output.toFixed(2));
    });
});