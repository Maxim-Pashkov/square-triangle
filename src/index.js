import 'bootstrap/dist/css/bootstrap.min.css';

import SquareTriangle from './SquareTriangle';

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const {target: form} = event;

    const square = SquareTriangle.calc(form.elements.a.value, form.elements.h.value);

    if(square === null) {
        document.getElementById('output').style.display = 'none';
    } else {
        document.getElementById('output').style.display = '';
        document.getElementById('output-square').textContent = +(Math.round(square + "e+2")  + "e-2");;
    }   
});