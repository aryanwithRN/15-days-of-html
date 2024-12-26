$(document).ready(function () {
  $("#calculate").click(function () {
    var num = parseFloat($("#num").val());
    var ch=$("#choice").val();
    if ( ch== "c") {
      // convert C to F
      var result = (num * 9) / 5 + 32;

      $("#result").text("Result:" + result);
    } 
    else if (ch == "f") {
      // convert F to C
      var result = ((num - 32) * 5) / 9;
      $("#result").text("Result: " + result);
    } 
    else if(ch== "k") {
      // convert K to C
      var result = num - 273.15;
      $("#result").text("Result: " + result);
    }
  });
});

// $(document).ready(function () {
//     $("#calculate").on({
//         click: function () {
//             var a1 = parseInt($("#temp").val());
//             var ch=$("#type").val();

//             if (ch== "C") {
//                 var cal_F = (a1 *(9/5) + 32);
//                 var cal_K = (a1 + 273.15);

//                 $("#result").text(cal_F);
//                 $("#result2").text(cal_K);

//             }
//              else if (ch=="K") {
//                 var cal_F = (a1 *(9/5) + 32);
//                 var cal_C = (a1 - 273.15);

//                 $("#result").text(cal_F);
//                 $("#result2").text(cal_C);

//             }
//             else if (ch == "F") {
//                 var cal_K = (a1 + 273.15);
//                 var cal_C = (a1 - 273.15);

//                 $("#result").text(cal_K);
//                 $("#result2").text(cal_C);

//             }
//         }
//     });
// });
