
const inpt = document.getElementById('text-input');
const number = document.getElementsByClassName('number');
const action = document.getElementsByClassName('action');
const equal = document.getElementById('equal');

for (let numb of number) {
    numb.addEventListener('click', function () {
        this.innerHTML;
        inpt.value = "" + inpt.value + this.innerHTML;
    });
}


for (let act of action) {
    act.addEventListener('click', function () {
        this.innerHTML;
        inpt.value = "" + inpt.value + this.innerHTML;
    });
}

equal.addEventListener('click', function () {
    inpt.value = eval(inpt.value);
});

