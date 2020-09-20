// let header1 = document.getElementById('head2');
// header1.style.display = 'none';

document.addEventListener("DOMContentLoaded", function(event) { 

    let devicevw = window.matchMedia('(max-width: 768px)');

    //document.getElementById('head2').innerText = devicevw.matches;

    let nav = document.getElementById('navi');
    let bar = document.getElementById('navigate'),
    hide = document.getElementsByClassName('hide');
    nav.addEventListener('click', () => {
        if (bar.style.display === 'none') {
            bar.style.display = 'block';
            Array.prototype.forEach.call(hide, element => {
                element.style.zIndex = '1';
            });
        }
        else {
            bar.style.display = 'none';
            Array.prototype.forEach.call(hide, element => {
                element.style.zIndex = '1';
            });
        }
    })

});