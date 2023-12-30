let input = document.getElementById('input');
let output = document.getElementById('output');
let submit = document.getElementById('submit');

submit.addEventListener('click',function(){
    let x = input.value;
    let y = x.length;
    output.innerHTML = y;
    input.value = '';
    // console.log(y);
})