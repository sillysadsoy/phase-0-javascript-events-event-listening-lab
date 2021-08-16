const input = document.getElementById('input');


function addingEventListener() {
    input.addEventListener('click', clickAlert);
}


function clickAlert() {
    alert('I was clicked!');
}
