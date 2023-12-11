fetch('results.php')
  .then(response => response.json())
  .then(data => {
    let username = localStorage.getItem("username");
    for (let i of data){
        if(i.id === username && parseInt(i.sem) === 1){
        mainResult(i.cgpa);
        tablechart(i);
        console.log(i);
        }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  function resultchange(){
    let semSelect = document.getElementById("semSelect");
    console.log(semSelect.value);
    fetch('results.php')
    .then(response => response.json())
    .then(data => {
    for (let i of data){
      let username = localStorage.getItem("username");
        if(i.id === username && parseInt(i.sem) === parseInt(semSelect.value)){
          mainResult(i.cgpa);
          tablechart(i);
        }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }

  function tablechart(val){
    google.charts.load('current', {'packages':['table']});
    google.charts.setOnLoadCallback(drawTable);
  
    function drawTable() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Semester');
      data.addColumn('number', 'CGPA');
      data.addColumn('number', 'SGPA');
      data.addColumn('number', 'Adv Python');
      data.addColumn('number', 'ATCD');
      data.addColumn('number', 'AI');
      data.addColumn('number', 'PE');
      data.addColumn('number', 'CN');
      data.addRows([
        [parseFloat(val.sem), parseFloat(val.cgpa),parseFloat(val.sgpa),parseFloat(val.sub1),parseFloat(val.sub2),parseFloat(val.sub3),parseFloat(val.sub4),parseFloat(val.sub5)]
      ]);
  
      var table = new google.visualization.Table(document.getElementById('table_div'));
  
      table.draw(data, {showRowNumber: true, width: '50%', height: '15%'});
  }
  }


function mainResult(val){
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
        function drawChart() {

          var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Marks gained',     parseFloat(val)],
            ['Marks lost',      10-parseFloat(val)],
          ]);
          var options = {
            title: ' Overall Result',
            pieHole: 0.4,
          };
          console.log(options);
  
          var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
          chart.draw(data, options);
        }
      }
      /*
let subject1;
let subject2;
let subject3;
let subject4;
let subject5;

/*Sub 1*/
      /*

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
          var data1 = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Marks gained',     35],
            ['Marks lost',      15],
          ]);
          var options1 = {
            title: subject1,
            pieHole: 0.4,
          };
  
          var chart1 = new google.visualization.PieChart(document.getElementById('Maths'));
          chart1.draw(data1, options1);
          */
/*Sub-2*/
      /*

          var data2 = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Marks gained',     40],
            ['Marks lost',      10],
          ]);
          var options2 = {
            title: subject2,
            pieHole: 0.4,
          };
  
          var chart2 = new google.visualization.PieChart(document.getElementById('chem'));
          chart2.draw(data1, options1);
          */
/*Sub-3*/
      /*

          var data3 = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Marks gained',     40],
            ['Marks lost',      10],
          ]);
          var options3 = {
            title: subject3,
            pieHole: 0.4,
          };
  
          var chart3= new google.visualization.PieChart(document.getElementById('physics'));
          chart3.draw(data3, options3);
          */

/*Sub-4*/
      /*
          var data4= google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Marks g',     45],
            ['Marks lost',      5],
          ]);
          var options4 = {
            title: ' Overall Result',
            pieHole: 0.4,
          };
  
          var chart4= new google.visualization.PieChart(document.getElementById('english'));
          chart4.draw(data4, options4);
        }
        */
/*Sub-5*/
      /*

fetch('result.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(row => {
                  for (const column in row) {
                  var data4= google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day'],
                    ['Marks g',     row[column]],
                    ['Marks lost',      5],
                  ]);
                  var options4 = {
                    title: column,
                    pieHole: 0.4,
                  };
          
                  var chart4= new google.visualization.PieChart(document.getElementById('english'));
                  chart4.draw(data4, options4);
                  }
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
            */





            