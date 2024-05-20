var content = document.body;
var darkMode = document.getElementById('dark-change');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var tab = document.getElementsByTagName('table')[0];
darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
    b1.classList.toggle('night');
    b2.classList.toggle('night');
    tab.classList.toggle('night');
})
