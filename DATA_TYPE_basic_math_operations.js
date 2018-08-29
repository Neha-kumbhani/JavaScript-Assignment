var result = basicOp('+', 4, 7);
document.getElementById("demo").innerHTML = result;

var result1 = basicOp('-', 15, 18);
document.getElementById("demo1").innerHTML = result1;

var result2 = basicOp('*', 5, 5);
document.getElementById("demo2").innerHTML = result2;

var result3 = basicOp('/', 49, 7);
document.getElementById("demo3").innerHTML = result3;


function basicOp(o,n1,n2) {
//(o);
   var result = 0;
   if (o == '+'){
  // alert(1);
   result = n1+n2;
   }
   if(o == '-'){
   
   result = n1-n2;
   }
    if(o == '*'){
   result = n1*n2;
   }
    if(o == '/'){
   result = n1/n2;
   }
   return result;

}
