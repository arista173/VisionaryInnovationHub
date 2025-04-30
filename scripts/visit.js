document.addEventListener("DOMContentLoaded", function() {
    let mdate = document.getElementById("date");
    let mtime = document.getElementById("time");
    let mno = document.getElementById("no");
    let mmsg = document.getElementById("errormessage");
    let mcheck = document.getElementById("check");
    let mdel = document.getElementById("del");

    mcheck.onclick = function() {
        let strdate = mdate.value;
        let strtime = mtime.value;
        let strno = mno.value;
        if (strdate == "" || strtime == "" || strno == "") {
            mmsg.setAttribute("style", "color: red");
            mmsg.innerHTML = "Data not completed, please re-enter.";
            return false;
        }
        else if (strno < 1 || !Number.isInteger(Number(strno))) {
            mmsg.setAttribute("style", "color: red");
            mmsg.innerHTML = "Please enter a valid number of people!";
            return false;
        }
        else {
            let result = reserve(strdate, strtime, strno);
            if (result) {
                alert("Your reservation is succesful!");
                mmsg.innerHTML = "";
            }
            else {
                alert("Sorry, the reservation is full!");
                mmsg.innerHTML = "";
            }
        }
    }
    
    mdel.onclick = function() {
        mmsg.innerHTML = "";
    }
});