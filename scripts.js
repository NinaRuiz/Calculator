
const inpt = document.getElementById('text-input');
const number = document.getElementsByClassName('number');
let button;

for (let numb of number) {
    numb.addEventListener('click', function () {
        this.innerHTML;
        inpt.value = this.innerHTML;
    });
}



