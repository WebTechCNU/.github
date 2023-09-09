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
        while(i < 4) {
            let lab = $("<td>").text(item.points[i][0] * 10);
            let className = "warning";
            if (item.points[i][0] == 0.8) {
                className = "info"
            } else if (item.points[i][0] == 1) {
                className = "success"
            }
            lab.append(`<br/><a href="` + item.points[i][1] + `" target="_blank"
        class="btn btn-`+ className + ` mb-1" role="button">Codebase</a>
    <br>
    <a href="`+ item.points[i][2] + `" target="_blank"
        class="btn btn-`+ className + ` mb-1" role="button">Deployment link</a>
    <br>`)
            row.append(lab);
            i ++;
        }


    //     const firstLab = $("<td>").text(item.points[0][0]*10);
    //     let firstClass = "warning";
    //     if(item.points[0][0] == 0.8){
    //         firstClass = "info"
    //     } else if(item.points[0][0] == 1){
    //         firstClass = "success"
    //     }
    //     firstLab.append(`<br/><a href="`+ item.points[0][1] +`" target="_blank"
    //     class="btn btn-`+firstClass+` mb-1" role="button">Codebase</a>
    // <br>
    // <a href="`+ item.points[0][2] +`" target="_blank"
    //     class="btn btn-`+firstClass+` mb-1" role="button">Deployment link</a>
    // <br>`)

    //     const secondLab = $("<td>").text(item.points[1][0]*15);
    //     let secondClass = "warning";
    //     if(item.points[1][0] == 0.8){
    //         secondClass = "info"
    //     } else if(item.points[1][0] == 1){
    //         secondClass = "success"
    //     }
    //     secondLab.append(`<br/><a href="`+ item.points[1][1] +`" target="_blank"
    //     class="btn btn-`+secondClass+` mb-1" role="button">Codebase</a>
    // <br>
    // <a href="`+ item.points[1][2] +`" target="_blank"
    //     class="btn btn-`+secondClass+` mb-1" role="button">Deployment link</a>
    // <br>`)

    //     const thirdLab = $("<td>").text(item.points[2][0]*20);
    //     let thirdClass = "warning";
    //     if(item.points[2][0] == 0.8){
    //         thirdClass = "info"
    //     } else if(item.points[2][0] == 1){
    //         thirdClass = "success"
    //     }
    //     thirdLab.append(`<br/><a href="`+ item.points[2][1] +`" target="_blank"
    //     class="btn btn-`+thirdClass+` mb-1" role="button">Codebase</a>
    // <br>
    // <a href="`+ item.points[2][2] +`" target="_blank"
    //     class="btn btn-`+thirdClass+` mb-1" role="button">Deployment link</a>
    // <br>`)

    //     const fourthLab = $("<td>").text(item.points[3][0]*15);
    //     let fourthClass = "warning";
    //     if(item.points[3][0] == 0.8){
    //         fourthClass = "info"
    //     } else if(item.points[3][0] == 1){
    //         fourthClass = "success"
    //     }
    //     fourthLab.append(`<br/><a href="`+ item.points[3][1] +`" target="_blank"
    //     class="btn btn-`+fourthClass+` mb-1" role="button">Codebase</a>
    // <br>
    // <a href="`+ item.points[3][2] +`" target="_blank"
    //     class="btn btn-`+fourthClass+` mb-1" role="button">Deployment link</a>
    // <br>`)


    //     row.append(nameCell);
    //     row.append(firstLab);
    //     row.append(secondLab);
    //     row.append(thirdLab);
    //     row.append(fourthLab);

        tableBody.append(row);
    });
}

