// from data.js
let ufoSighting = data;

// selecting btn
let btn = d3.select("#filter-btn");

//  On click of btn begin function
btn.on("click", function(){

    // prevent page refresh
    d3.preventDefault();

    // selecting the input element
    let inputElement = d3.select("#datetime");

    // Get value property of input element
    let inputValue = inputElement.property("value")

    console.log(inputValue);
    console.log(ufoSighting);
  
    // connecting input value to data
    let filteredData = ufoSighting.filter(ufoSighting => ufoSighting.datetime === inputValue);

    
    console.log(filteredData);

    // set variables for each 
    let date = filteredData.datetime;
    let city = filteredData.city;
    let state = filteredData.state;
    let country = filteredData.country;
    let shape = filteredData.shape;
    let duration = filteredData.durationMinutes;
    let comments = filteredData.comments;


    // Add the summary stats to the columns in the table
  d3.select(".table-body")
  .append("td").text(`${date}`)
  .append("td").text(`${city}`)
  .append("td").text(`${state}`)
  .append("td").text(`${country}`)
  .append("td").text(`${shape}`)
  .append("td").text(`${duration}`)
  .append("td").text(`${comments}`);


});

