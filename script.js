

var currentDay = moment().format('dddd MMMM D')
var currentHour = moment().format('HH:mm');
document.getElementById("currentDay").textContent = currentDay;

let workHours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00' ]


let myContainer = $(".container")

for (let i = 0; i< workHours.length; i++) {
    stringifiedWorkHours = workHours[i]
    // Build Columns 
    let timeColumn = $("<div></div>");
    timeColumn.prop("class","col time-block nopadding");
    let textColumn = $("<div></div>");
    textColumn.prop("class","col-6 nopadding");
    
    let saveColumn = $("<div></div>");
    saveColumn.prop("class","col saveBtn");

    //Build and add row
    row = $("<div></div>")
    row.prop("class","row")
    myContainer.append(row)
    
    //add columns
    row.append(timeColumn)
    row.append(textColumn)
    row.append(saveColumn)

    //add content

    textAreaDesignator = stringifiedWorkHours + "-textArea"
    
    let timeBlock = $("<p>"+displayConverter(workHours[i])+"</p>")
    timeBlock.prop("id", stringifiedWorkHours)
    let textArea = $("<textarea></textarea>")
    textArea.prop("id", textAreaDesignator)
    textArea.prop("value",localStorage.getItem(displayConverter(workHours[i])))
    let saveButton = $("<img src=.\\assets\\images\\save.png>")
    saveButton.attr("onClick","saveTextArea();")
    saveButton.prop("class","img-fluid")
    //add content
    timeColumn.append(timeBlock)
    //timeColumn.prop("class","col hour time-block")
    textColumn.append(textArea)
    saveColumn.append(saveButton)
    

    if ( currentHour < workHours[i]) {
        timeBlock.prop("class","hour time-block")
        textArea.prop("class","future")

    }
    if ( currentHour > workHours[i]) {
        timeBlock.prop("class","hour time-block")
        textArea.prop("class","past")

    }
    if ( currentHour >= workHours[i] && currentHour < workHours[i+1]){
        timeBlock.prop("class","hour time-block")
        textArea.prop("class","present")
        
    }
    
    console.log(workHours[i])
}

function saveTextArea () {
    for (let i = 0; i< workHours.length; i++){
        localStorage.setItem(document.getElementById(workHours[i]).textContent,document.getElementById(workHours[i]+"-textArea").value)
        console.log(workHours[i]+"-textArea")
    }
}

function displayConverter (time){
    if (time == '09:00'){
        return "9AM"
    }
    if (time == '10:00'){
        return "10AM"
    }
    if (time == '11:00'){
        return "11AM"
    }
    if (time == '12:00'){
        return "12PM"
    }
    if (time == '13:00'){
        return "1PM"
    }
    if (time == '14:00'){
        return "2PM"
    }
    if (time == '15:00'){
        return "3PM"
    }
    if (time == '16:00'){
        return "4PM"
    }
    if (time == '17:00'){
        return "5PM"
    }
}