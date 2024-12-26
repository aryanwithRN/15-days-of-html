$(document).ready(function(){
        $("#calculate").click(function(){
            var TSA= parseInt($("#TSA").val());
            var ccc= ($("#ccc").val());

            if(TSA > 6000 && ccc == "rn2023")
            {
                var discount = TSA * (10/100);
                var newAmount = TSA - discount;
                $("#result").text("Discounted amount" + newAmount);
            }
            else {
                $("#result").text("Total amount" + TSA );
            }
        });

        $("#Y").on({
            click: function() {
                $("#ccc").show();
            }
        });
        $("#N").on({
            click: function() {
                var TSA= parseInt($("#TSA").val());
                $("#result").text("Total amount" + TSA );
                $("#ccc").hide();
            }
        });
        
    });