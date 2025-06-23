/***************global variables********************/ 
var unpaid_grid= document.getElementById("unpaid");

/***********************chart*********************** */

 const ctx = document.getElementById('myChart').getContext('2d');

  // Gradient for first line
  const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient1.addColorStop(0, 'rgba(251, 125, 91, 0.4)');
  gradient1.addColorStop(1, 'rgba(251, 125, 91, 0)');

  // Gradient for second line
  const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(252, 196, 62, 0.4)');
  gradient2.addColorStop(1, 'rgba(252, 196, 62, 0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      datasets: [
        {
          label: 'Last Week',
          data: [10, 20, 35, 40, 30, 25, 50, 60, 45, 70, 55, 80],
          borderColor: 'rgba(251, 125, 91, 1)',
          backgroundColor: gradient1,
          tension: 0.4,
          fill: true
        },
        {
          label: 'This Week',
          data: [15, 25, 20, 35, 45, 40, 60, 55, 65, 75, 85, 90],
          borderColor: 'rgba(252, 196, 62, 1)',
          backgroundColor: gradient2,
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      scales: {
        x: {
          grid: {
            display: true,     
            drawOnChartArea: true,
            drawTicks: false,
            color: 'rgba(0,0,0,0.05)'
          }
        },
        y: {
          grid: {
            display: false    
          },
          ticks: {
            stepSize: 25,
            beginAtZero: true,
            max: 100
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 10,
            padding: 20
          }
        }
      }
    }
  });
/*********************sec char********************** */
 const barCtx = document.getElementById("barChart").getContext("2d");

  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  // Gradient colors
  const grad1 = barCtx.createLinearGradient(0, 0, 0, 300);
  grad1.addColorStop(0, "rgb(251, 125, 91)");
  grad1.addColorStop(1, "rgb(251, 125, 91)");

  const grad2 = barCtx.createLinearGradient(0, 0, 0, 300);
  grad2.addColorStop(0, "rgb(252, 196, 62)");
  grad2.addColorStop(1, "rgb(252, 196, 62)");

  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: days,
      datasets: [
        {
          label: "Last Week",
          data: [10, 20, 35, 40, 30, 25, 50],
          backgroundColor: grad1,
          borderRadius: 5,
          barThickness: 10
        },
        {
          label: "This Week",
          data: [15, 25, 20, 35, 45, 40, 60],
          backgroundColor: grad2,
          borderRadius: 5,
          barThickness: 10
        }
      ]
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20
          },
          grid: {
            display: true,
            color: "rgba(0,0,0,0.05)"
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
          align: "end",
          labels: {
            usePointStyle: true,
            pointStyle: "circle"
          }
        }
      }
    }
  });
/****************calender****************** */
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'title',
      right: 'prev,next'
    },
    events: [
      {
        title: 'Important',
        start: '2021-03-08',
        color: '#5e3ef7',
        className: 'fc-event-important'
      },
      {
        title: 'Exam',
        start: '2021-03-23',
        color: '#ff8364',
        className: 'fc-event-exam'
      },
      {
        title: 'Holiday',
        start: '2021-03-20',
        color: '#fcd54c',
        className: 'fc-event-holiday'
      }
    ]
  });

  calendar.render();
});
/*************************table************************************ */
const students = [
  { name: "Samantha William", id: "123456789", class: "VII A", fees: "$50,036" },
  { name: "Tony Soap", id: "123456789", class: "VII A", fees: "$50,036" },
  { name: "Jordan Nico", id: "123456789", class: "VII A", fees: "$50,036" },
  { name: "Karen Hope", id: "123456789", class: "VII A", fees: "$50,036" },
  { name: "Nadila Adja", id: "123456789", class: "VII A", fees: "$50,036" },
];

unpaid_grid.innerHTML=`<table id="students-table" class="text-center">
   
    <tbody>
     
    </tbody>
  </table>
`;
let cartona = "";
let tableBody = document.querySelector("#students-table tbody"); 

for (let i = 0; i < students.length; i++) {
  let row = `
    <tr>
      <td><div class="table-icon"></div></td>
      <td>${students[i].name}</td>
      <td>${students[i].id}</td>
      <td>${students[i].class}</td>
      <td>${students[i].fees}</td>
    </tr>
  `;
  cartona += row;
}

tableBody.innerHTML = cartona;
