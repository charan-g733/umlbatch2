let msgContainer = document.getElementById("msgContainer");
let inputValue = document.getElementById("inputValue");



function sendInput(){
      let msgBlock = document.createElement("div");
      msgBlock.classList.add("msg-from-student")
      let paraEle = document.createElement("p");
      if(inputValue.value!==""){
          paraEle.textContent = inputValue.value;
          paraEle.style.fontSize = "20px"
          msgBlock.appendChild(paraEle);
          inputValue.value = "";
          msgContainer.appendChild(msgBlock);
          let breakEl = document.createElement("br");
          msgContainer.appendChild(breakEl);
  }
}

inputValue.addEventListener("keydown",function(event){
  console.log(event.key)
  if(event.key === "Enter"){
    let msgBlock = document.createElement("div");
      msgBlock.classList.add("msg-from-student")
      let outerMsg = document.createElement("div");
      let paraEle = document.createElement("p");
      let inputValue = document.getElementById("inputValue");
      if(inputValue.value!==""){
          paraEle.textContent = inputValue.value;
          paraEle.style.fontSize = "20px";
          msgBlock.style.margin = "10px";
          msgBlock.classList.add("d-flex","flex-row","justify-content-end");
          msgBlock.appendChild(paraEle);
          inputValue.value = "";
          outerMsg.appendChild(msgBlock);
          msgContainer.appendChild(outerMsg);
          let breakEl = document.createElement("br");
          msgContainer.appendChild(breakEl);
  }
}
})

google.charts.load("current", {packages:["corechart"]});
google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Present',     11],
        ['Absent',      2],
      ]);
      var options = {
        title: ' Overall Attendance',
        pieHole: 0.4,
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }

  google.charts.setOnLoadCallback(drawStuff);

  function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
      ['Days', 'Classes'],
      ['Mon', 1],
      ["Tue", 4],
      ["Wed", 3],
      ["Thur", 2],
      ["Fri", 0],
      ['Sat', 8]
    ]);

    var options = {
      title: 'Chess opening moves',
      width: 700,
      legend: { position: 'none' },
      chart: { title: 'Weekly Attendance'},
      bars: 'horizontal', // Required for Material Bar Charts.
      axes: {
        x: {
          0: { side: 'top', label: 'Classes'} // Top x-axis.
        }
      },
      bar: { groupWidth: "90%" }
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    chart.draw(data, options);
  };

