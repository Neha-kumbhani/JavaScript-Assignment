function rentACar(noOfDays){
var result = noOfDays*40;
if(noOfDays >= 7){
alert(result);
result = result -50;
}
if(noOfDays >=3 &&noOfDays<7 ){
alert(result)
result = result-20;
}
return result;
}