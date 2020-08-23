// get current time using moment js

// if currentTime in time range then apply x color
// if time before currentTime apply y color
// if time after currentTime apply z color

// Generate with jquery at time of page load

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
    
    let timeBlock = $("<p>"+workHours[i]+"</p>")
    timeBlock.prop("id", stringifiedWorkHours)
    let textArea = $("<textarea></textarea>")
    textArea.prop("id", textAreaDesignator)
    textArea.prop("value",localStorage.getItem(workHours[i]))
    let saveButton = $("<img src=.\\assets\\images\\save.png>")
    saveButton.attr("onClick","saveTextArea();")
    saveButton.prop("class","img-fluid")
    //add content
    timeColumn.append(timeBlock)
    //timeColumn.prop("class","col hour time-block")
    textColumn.append(textArea)
    saveColumn.append(saveButton)
    

    if ( currentHour < workHours[i]) {
        timeBlock.prop("class","hour time-block past")
        textArea.prop("class","future")

    }
    if ( currentHour > workHours[i]) {
        timeBlock.prop("class","hour time-block past")
        textArea.prop("class","past")

    }
    if ( currentHour > workHours[i] && currentHour < workHours[i+1]){
        timeBlock.prop("class","hour time-block present")
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