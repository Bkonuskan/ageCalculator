
function calculateAge() {
    var userday= document.getElementById("day").value;
    var userMonth= document.getElementById("month").value;
    var userYear= document.getElementById("year").value;
    var ergebnis= document.getElementById("ergebnis");



    var date = new Date();
    var day = date.getDate();
    var month= date.getMonth()+1;
    var year= date.getFullYear();

    var monthDays=[31,28,31,30,31,30,31,31,30,31,30,31]

    if (userday>day) {
        day= day + monthDays[month-1];
        month=month-1        
    }
    if (userMonth>month) {
        month=month+12;
        year=year-1;        
    }

    var calculatedDay=day-userday;
    var calculatedMonth=month-userMonth;
    var calculatedYear=year-userYear; 

    console.log(calculatedDay,calculatedMonth,calculatedYear);
    ergebnis.innerHTML= "Du bist "+calculatedYear+ " Jahre "+
    +calculatedMonth+" Monate und "+calculatedDay+" Tage alt";

    /* console.log(day,month,year); */
}

 