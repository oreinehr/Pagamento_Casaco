function copiarChavePix() {
    // Seleciona o elemento que contém a chave Pix
    const chavePixElement = document.getElementById("chavePix");

    // Copia o texto da chave Pix para a área de transferência
    navigator.clipboard.writeText(chavePixElement.textContent)
        .then(() => {
            // Exibe a mensagem de confirmação com um atraso de 500ms
            setTimeout(() => {
                alert("Chave Pix copiada para a área de transferência!");
            }, 300);
        })
        .catch(error => {
            console.error("Erro ao copiar a chave Pix:", error);
        });
}
