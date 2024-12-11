/* Set the width of the side navigation to 250px */



const closeBtn = document.querySelector(".closebtn");
closeBtn.addEventListener("click", function () {
    document.getElementById("mySidenav").style.width = "0";
});

const openBtn = document.querySelector(".open");
openBtn.addEventListener("click", function () {
    document.getElementById("mySidenav").style.width = "200px";
});


