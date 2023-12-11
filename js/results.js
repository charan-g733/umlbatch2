fetch('http://localhost/uml/attendance.php')
  .then(response => response.json())
  .then(data => {
    let username = localStorage.getItem("username");
    for (let i of data){
        if(i.Id === username){
        mainResult(i.ClassesAttended);
        }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });


function mainResult(val){
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
        function drawChart() {

          var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Marks gained',     150],
            ['Marks lost',      50],
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
let subject1;
let subject2;
let subject3;
let subject4;
let subject5;

/*Sub 1*/
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

/*Sub-2*/

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

/*Sub-3*/

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


/*Sub-4*/
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
  
/*Sub-5*/

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





            