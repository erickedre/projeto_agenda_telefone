const form = document.getElementById('form');
const nomes = [];
const telefones = [];
let linhas = '';

form.addEventListener ('submit', function (e) {
    e.preventDefault();
    adicionaContato();
    atualizaTabela();
})

function adicionaContato() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    if (inputNome.value.trim() == '' || inputTelefone.value.trim() == '') {
        alert('Preencha os campos de nome e telefone');
        return;
    }
    if(telefones.includes(inputTelefone.value)){
        alert('Telefone já cadastrado');
    }
    else{
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `<td><button class="btn-excluir" data-index="${nomes.length - 1}">X</button></td>`;
        linha += '</tr>'

        linhas += linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';
}
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    corpoTabela.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-excluir')) {
        const index = event.target.dataset.index;
        nomes.splice(index, 1);
        telefones.splice(index, 1);
        linhas = linhas.replace(`<tr>${event.target.parentNode.parentNode.innerHTML}</tr>`, '');
        atualizaTabela();
        }
    });
}
