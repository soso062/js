let div = document.createElement('div');

div.classList.add('container');
console.log(div);

function createLi(){
    return `
    <ul>
    <li>Arroz</li>
    <li>Feijão</li>
    <li>Picanha</li>
    <li>cerveja</li>
    <li>batata</li>
    </ul>

    `
}
document.getElementById('teste').innerHTML = createLi();


