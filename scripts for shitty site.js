function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.width = "0px";
}

function show(nr) {
    document.getElementById("table1").style.display = "none";
    document.getElementById("table2").style.display = "none";
    document.getElementById("table" + nr).style.display = "block";
}