// from data.js
let ufoSighting = data;

// selecting btn
let tbody = d3.select("tbody");

// function build table
function buildTable(data){
  tbody.html("");

  data.forEach((dataRow) => {
    // console.table(dataRow)
    let row = tbody.append('tr');

    // console.table(Object.values(dataRow));

    Object.values(dataRow).forEach((val) =>{
      let cell = row.append('td');
      cell.text(val);
    });
  })
}

//  function for click
function handleClick(){
  // prevent page refresh
  d3.event.preventDefault();

  // selecting the input element
  let date = d3.select("#datetime").property('value');
  let filterData = ufoSighting;

  if(date) {
    filterData = filterData.filter((row) => row.datetime === date);
  }

  buildTable(filterData);

}

d3.selectAll('#filter-btn').on('click', handleClick);

buildTable(ufoSighting);