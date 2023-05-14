const form = document.getElementById('formulario');
const inputNomeContato = document.getElementById('nome-contato');
const inputFoneContato = document.getElementById('fone-contato');
const mensagemSucesso ='Contato Adicionado com Sucesso!!<img src="./imagens/aprovado.png" alt="Imagem de Adicionado com Sucesso" />';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let nomeValidado = validaNome(inputNomeContato.value);
    console.log(nomeValidado);
    
    if(nomeValidado != true) {
        
        alert('Nome nao está completo');
    } else {
        atualizaLinha();
        atualizaTabela();
    }
    
});

function atualizaLinha() {
    
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputFoneContato.value}</td>`;
    linha += '</tr>';
    
    linhas += linha;
    
    
    inputNomeContato.value = '';
    inputFoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    const  containerMensagemSucesso = document.querySelector('.adicionado-sucesso');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = block;
}

function validaNome(nome) {
    const nomeComoArray = nome.split(' ');
    return nomeComoArray.length >= 2;
}
