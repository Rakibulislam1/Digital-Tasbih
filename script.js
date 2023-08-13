const subhanAllahDisplay = document.getElementById('subhanAllahDisplay')
const subhanAllahIncrement = document.getElementById('subhanAllahIncrement')
const subhanAllahDecrement = document.getElementById('subhanAllahDecrement')


const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay')
const alhamdulillahIncrement = document.getElementById('alhamdulillahIncrement')
const alhamdulillahDecrement = document.getElementById('alhamdulillahDecrement')


const allahuakberDisplay = document.getElementById('allahuakberDisplay')
const allahuakberIncrement = document.getElementById('allahuakberIncrement')
const allahuakberDecrement = document.getElementById('allahuakberDecrement')


const resetBtn = document.getElementById('resetBtn')


let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuakberInitialValue = 0;

// -----------
subhanAllahIncrement.addEventListener('click', function () {
    if (subhanAllahInitialValue === 33) {
        return alert('SubhanAllah Is Complete. Please Fill-up Another One')
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue
})

subhanAllahDecrement.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) {
        return alert('You cant added negative value');
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue
})
// -----------

// -----------
alhamdulillahIncrement.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 33) {
        return alert('Alhamdulillah Is Complete. Please Fill-up Another One')
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})

alhamdulillahDecrement.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) {
        return alert('You cant added negative value');
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})
// -----------


// -----------
allahuakberIncrement.addEventListener('click', function () {
    if (allahuakberInitialValue === 33) {
        return alert('Allahuakber Is Complete. Please Fill-up Another One')
    }
    allahuakberInitialValue += 1;
    allahuakberDisplay.innerText = allahuakberInitialValue
})

allahuakberDecrement.addEventListener('click', function () {
    if (allahuakberInitialValue === 0) {
        return alert('You cant added negative value');
    }
    allahuakberInitialValue -= 1;
    allahuakberDisplay.innerText = allahuakberInitialValue
})
// -----------



resetBtn.addEventListener('click', function () {
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuakberDisplay.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuakberInitialValue = 0;


})