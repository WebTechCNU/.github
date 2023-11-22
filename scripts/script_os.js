$(document).ready(function () {
    appendDataToTable();

    $('.btn-warning').tooltip({
        title: "In progress: please, make it work properly",
        placement: "left"
    });
    
    $('.btn-info').tooltip({
        title: "Good enough",
        placement: "left"
    });
    
    $('.btn-success').tooltip({
        title: "Great Job!",
        placement: "left"
    });
});

function appendDataToTable() {
    var data = JSON.parse(students);
    const tableBody = $("#table");

    data.forEach(item => {
        const row = $("<tr>");
        const nameCell = $("<td>").text(item.name);
        row.append(nameCell);

        let i = 0;
        let sum = 0;
        while(i < 8) {
            let lab = $("<td>");
            let className = "warning";
            if(item.points[i] == 0){
                row.append(lab);
                i ++;
                continue;
            }
            sum += item.points[i] * grades[i];
            lab.text(item.points[i] * grades[i]);
            // if (item.points[i][0] == 0.8) {
            //     className = "info";
            // } else if (item.points[i][0] == 1) {
            //     className = "success";
            // }
            // lab.append(`<br/><a href="` + item.points[i][1] + `" target="_blank"
            //     class="btn btn-`+ className + ` mb-1" role="button">Codebase</a>
            // <br>`);
            row.append(lab);
            i ++;
        }
        let sumTd = $("<td>");
        sumTd.append(`<b>` + sum + `</b>`);
        row.append(sumTd);

        tableBody.append(row);
    });
}

let grades = [10,10,5,10,15,10,10,10]