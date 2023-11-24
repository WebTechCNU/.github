$(document).ready(function () {
    appendDataToTable();

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
            if(item.points[i] == 0){
                row.append(lab);
                i ++;
                continue;
            }
            sum += item.points[i] * grades[i];
            lab.text(item.points[i] * grades[i]);

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