let majors = [];
let ranks = [];
let total = 0;

const options = new Map([
    ["techwave",["Technology Zone","TechWave Solutions"]],
    ["quantum",["Technology Zone","Quantum Leap Technologies"]],
    ["cyberguard",["Technology Zone","CyberGuard Systems"]],
    ["smartcity",["Technology Zone","SmartCity Innovations"]],
    ["connectify",["Technology Zone","Connectify Networks"]],
    ["ecotech",["Innovation Zone","EcoTech Labs"]],
    ["healthsphere",["Innovation Zone","HealthSphere Innovations"]],
    ["createch",["Innovation Zone","CreaTech Studio"]],
    ["greenfuture",["Ecology Zone","GreenFuture Enterprises"]],
    ["waterwise",["Ecology Zone","WaterWise Solutions"]],
    ["recycle",["Ecology Zone","ReCycle Innovations"]],
    ["ecobuild",["Ecology Zone","EcoBuild Technologies"]],
]);

function updateTable() {
    let mlast = document.getElementById("lastchange");
    let mapply = document.getElementById("totalapplied");
    mlast.innerHTML = "Last change time: " + Date();
    mapply.innerHTML = "Total Number of Companies Applied: " + total;
}

function process(name) {
    let chosencompany = options.get(name);
    let inputrank = document.getElementById(name).value;

    if (majors.includes(chosencompany)) {
        alert("You have already chosen the company");
    }
    else if (ranks.includes(inputrank)) {
        alert("You have already chosen the rank");
    }
    else if (inputrank == "" || !Number.isInteger(Number(inputrank))) {
        alert("Please enter the rank of chosen company");
    }
    else if (inputrank < 1 || inputrank > 10) {
        alert("Please enter the rank of chosen company between 1 and 10");
    }
    else {
        majors.push(chosencompany);
        ranks.push(inputrank);
        let acczone = document.getElementById(`z${inputrank}`);
        let acccompany = document.getElementById(`c${inputrank}`);
        acczone.innerHTML = chosencompany[0];
        acccompany.innerHTML = chosencompany[1];
        total++;
        if (inputrank == 1) {
            alert(`You have chosen ${chosencompany[1]} as your 1st chosen company in ${chosencompany[0]} succesfully`);
        }
        else if (inputrank == 2) {
            alert(`You have chosen ${chosencompany[1]} as your 2nd chosen company in ${chosencompany[0]} succesfully`);
        }
        else if (inputrank == 3) {
            alert(`You have chosen ${chosencompany[1]} as your 3rd chosen company in ${chosencompany[0]} succesfully`);
        }
        else {
            alert(`You have chosen ${chosencompany[1]} as your ${inputrank}th chosen company in ${chosencompany[0]} succesfully`);
        }
        updateTable();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let mhead = document.querySelectorAll(".headtitle");
    let mform = document.querySelectorAll(".formrank");
    let msub = document.getElementById("subbutton");
    let mclear = document.getElementById("clearbutton");
    let mmsg = document.getElementById("message");

    window.onload = function() {
        mform[1].setAttribute("style", "display: none;");
        mform[2].setAttribute("style", "display: none;");
        mform[0].setAttribute("style", "display: block;");
        mhead[0].setAttribute("style", "background-color: white;");
    }

    for (let i = 0; i < mhead.length; i++) {
        mhead[i].onclick = function() {
            for (let j = 0; j < mhead.length; j++) {
                mform[j].setAttribute("style", "display: none;");
                mhead[j].setAttribute("style", "background-color: '';");
            }
            this.setAttribute("style", "background-color: white;");
            mform[i].setAttribute("style", "display: block;");
        }  
    }

    msub.onclick = function() {
        let mgap = [];
        if (majors.length == 0) {
            mmsg.innerHTML = "You have not chosen any company.";
            mmsg.setAttribute("style", "color: red; text-align: center;");
        }

        else {
            let mmax = Math.max(...ranks);
            for (let i = 1; i <= mmax; i++) {
                if (document.getElementById(`z${i}`).innerHTML === "") {
                    if (i==1) {
                        mgap.push(" " + i + "st");
                    }
                    else if (i==2) {
                        mgap.push(" " + i + "nd");
                    }
                    else if (i==3) {
                        mgap.push(" " + i + "rd");
                    }
                    else {
                        mgap.push(" " + i + "th");
                    }
                }
            }
            if (mgap.length != 0) {
                mmsg.innerHTML = "You have not chosen your " + mgap + " chosen company, you can not leave any gap between your chosen companies.";
                mmsg.setAttribute("style", "color: red; text-align: center;");
            }
            else {
                mmsg.innerHTML = "You have succesfully submitted your application at time " + Date();
                mmsg.setAttribute("style", "color: red; text-align: center;");
            } 
        }
    }

    mclear.onclick = function() {
        majors = [];
        ranks = [];
        total = 0;
        document.querySelectorAll('.zone').forEach(element => {element.innerHTML=''});
        document.querySelectorAll('.company').forEach(element => {element.innerHTML=''});
        mmsg.innerHTML = "";
        updateTable();
    }
});