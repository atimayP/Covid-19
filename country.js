var date = []
var confirmed = []
var deaths = []
const recovered = []
getdata()
setTimeout(table,3500)
setTimeout(chart,3500)
// $(function(){
   
// })
$('#country').hide()
$('#myTable').hide()
$('#data').hide()

async function getdata(){
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));


    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var selectedCountry =result[country];
        console.log(selectedCountry);

        for(var i=0;i<selectedCountry.length;i++){
           date[i]=selectedCountry[i].date
           confirmed[i]=selectedCountry[i].confirmed
           deaths[i]=selectedCountry[i].deaths
           recovered[i]=selectedCountry[i].recovered
        }
    });
}

async function table() {

    console.log(date[0]);
    console.log(confirmed);
    console.log(date.length);
    
    
    for(var i=date.length-1;i>0;i--){
         var row = `<tr>
         <th scope="row">${date[i]}</th>
         <td>${confirmed[i]}</td>
         <td>${deaths[i]}</td>
         <td>${recovered[i]}</td>
         </tr>`
       $("#data").append(row);

     }
     $('#country').show()
     $('#loading').hide()
     $('#myTable').show()
     $('#data').show()
}

function chart(){
    const ctx = document.getElementById("myChart");
    ctx.height = 500;
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: date,
                datasets: [{
                    label: 'confirmed case',
                    fill: false,
                    data: confirmed,
                    backgroundColor: 
                        'rgba(186, 161, 212, 0.2)'
                    ,
                    borderColor: 
                        'rgba(51, 0, 102)'
                    ,
                    borderWidth: 1
                }]
            }
        });
    }
