$(document).ready(function(){
var food;
var animals;
var city;
var drink;
var color;
var listFavorite;
  $("form#questions").submit(function(event){
    event.preventDefault();
   food = $("#favFood").val();
   animals =$("input:radio[name=animal]:checked").val();
   city=$("input:radio[name=city]:checked").val();
   drink = $("#favDrink").val();
   color =$("#favColor").val();

    listFavorite= [food, animals, city, drink, color];
    var secondArray=[listFavorite[1],listFavorite[0],listFavorite[2]];
    secondArray.push(listFavorite[3]);
    secondArray.push(listFavorite[4]);
    // $("#results").append("<li>"+secondArray[0]+"</li>");
    // $("#results").append("<li>"+secondArray[1]+"</li>");
    // $("#results").append("<li>"+secondArray[2]+"</li>");
    // $("#results").append("<li>"+secondArray[3]+"</li>");
    // $("#results").append("<li>"+secondArray[4]+"</li>");
    secondArray.forEach(function(i){
      $("#results").append("<li>"+i+"</li>")
    });
  });
});
