$(document).ready(function () {
    getdata();
})


function getdata(){
    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var no = 1;
        for (var country in result) {
                var row = `<tr style="color: black;">
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country.html?country=${country}">${country}</a>
                        </td>
                    </tr>`;
          
            

            $("#data").append(row);
            no++;

        }

    });
}



      
function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


let Confirmed = document.getElementById('Confirmed');
let Death = document.getElementById('Death');
let Recovered = document.getElementById('Recovered');

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "adfc52c44amsh606254c7c8f0cacp1fbe0ejsn0f99b718f00f"
    }
})
    .then(response => response.json().then(data => {
        console.log(data);
        Confirmed.innerHTML = data.total_cases;
        Death.innerHTML = data.total_deaths;
        Recovered.innerHTML = data.total_recovered;

    }))
    .catch(err => {
        console.log(err);
    });