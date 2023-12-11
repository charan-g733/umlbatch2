let classes;
fetch('attendance.php')
.then(response => response.json())
.then(data => {
  console.log(data);
  for (let i of data){
      let username = localStorage.getItem("username");
        if(i.id === username && parseInt(i.sem)===3){
          console.log(i.classesattended);
        pieChart(i.classesattended,i.totalclasses);
        tablechart(i);
        tablechart2(i)
        }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
  function changed(){
    let semSelect = document.getElementById("semSelect");
    console.log(semSelect.value);
    fetch('attendance.php')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    for (let i of data){
      let username = localStorage.getItem("username");
        if(i.id === username && parseInt(i.sem) === parseInt(semSelect.value)){
          console.log(i.classesattended);
          pieChart(i.classesattended,i.totalclasses);
          tablechart(i);
          tablechart2(i);
        }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }

  function tablechart2(val){
  
    google.charts.load('current', {'packages':['table']});
    google.charts.setOnLoadCallback(drawTable);
  
    function drawTable() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Classes Attended');
      data.addColumn('number', 'Total Classes');
      data.addRows([
        [parseInt(val.classesattended), parseInt(val.totalclasses)]
      ]);
  
      var table = new google.visualization.Table(document.getElementById('table_div2'));
  
      table.draw(data, {showRowNumber: true, width: '100%', height: '15%'});
  }
  }
function tablechart(val){
  
  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawTable);

  function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Subject');
    data.addColumn('number', 'Classes Attended');
    data.addColumn('number', 'Total Classes');
    data.addRows([
      ['Adv Python',  parseInt(val.sub1attended), parseInt(val.sub1total)],
      ['ATCD',   parseInt(val.sub2attended),  parseInt(val.sub2total)],
      ['CN', parseInt(val.sub3attended), parseInt(val.sub3total)],
      ['AI',   parseInt(val.sub4attended),  parseInt(val.sub4total)],
      ['PE',   parseInt(val.sub5attended),  parseInt(val.sub5total)]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '50%', height: '100%'});
}
}
function pieChart(val,tot){
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Present',     parseInt(val)],
        ['Absent',      parseInt(tot)-parseInt(val)],
    ]);
    var options = {
        title: ' Overall Attendance',
        pieHole: 0.4,
    };
    
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}
}
