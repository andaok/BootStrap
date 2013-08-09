function historyLotteryCode_1(){

$.ajax({
type: 'POST',    
url : 'ajaxReturn.php',  
data: "userid=12",   
success: function(data){ 
 alert(data);
var partn = /<script.*>.*<\/script>/;
if( data == 'empty' && partn.test(data) ){return;}

eval_r("data="+data);
document.getElementByIdx_x("count").innerHTML=data.count;

setTimeout(historyLotteryCode_1,5000);
}
});
}
setTimeout(historyLotteryCode_1,5000);