$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var no = 1;
        for (var country in result) {

            var row = `<tr>
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country.html?country=${country}">${country}</a>
                        </td>
                    </tr>`;

            $("#data").append(row);
            no++;

        }

    });

})

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