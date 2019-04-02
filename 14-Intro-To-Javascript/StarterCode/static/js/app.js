// from data.js
let ufoSighting = data;

// Selecting tbody section
let panel = d3.select(".panel");



//  On click of button prevent page from refreshing
btn.on("click", function(){
    d3.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value")

    console.log(inputValue);
    console.log(ufoSighting);
  
    let filteredData = ufoSighting.filter(ufoSighting => ufoSighting.datetime === inputValue);

    


});





console.log(data);