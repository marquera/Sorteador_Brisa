function sortearNome() {
    var nomes = ["Karol", "Marcos Vinicius", "Marcos Silva", "Vanessa"];
    var nomeSorteado = nomes[Math.floor(Math.random() * nomes.length)];

    document.getElementById('nomes-container').style.display = 'none';
    document.getElementById('nomes').value = nomeSorteado;

    document.getElementById('resultado-valor').innerText = nomeSorteado;
    document.getElementById('resultado-container').style.display = 'block';
    document.querySelector('#form-sorteador button').style.display = 'none';
}

function recarregarPagina() {
    location.reload();
}
