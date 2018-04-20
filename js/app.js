let fn = () => f(1);

function f(p) {
    console.log(p);
}

document.getElementById('container').addEventListener('click', fn, false);
