
//document.getElementById('view').textContent ="Hello World";
var showMe = function(){
  //document.getElementById("view").textContent = "Hai";
  var text = "";
  var sum = 0;
  for(var i = 999; i>=1; i--){

    if(i%3==0 || i%5==0){
      //text += i + "<br>";
      sum += i;
      //document.getElementById("view").innerHTML = text;

    }
  }
  text += sum;
  document.getElementById("view").innerHTML = text;
}
  //document.getElementById("view").textContent = "Hai";
