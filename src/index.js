import 'bootstrap/dist/css/bootstrap.min.css';

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const {target: form} = event;
    const a = +form.elements.a.value;
    const h = +form.elements.h.value;

    const square = 0.5 * a * h;

    if(!a || !h) {
        document.getElementById('output').style.display = 'none';
    } else {
        document.getElementById('output').style.display = '';
        document.getElementById('output-square').textContent = +(Math.round(square + "e+2")  + "e-2");;
    }   
});