function alterarCirculo() {
    const circulo = document.getElementById('circulo');
     const corAlterada = '#' +
     Math.floor(Math.random()*16777215).toString(16);
     const novoTamanho = Math.floor(Math.Random() * (200 - 50 + 1)) +50;

      circulo.Style.backgroundColor = corAlterada;
      circulo.Style.width = novoTamanho + 'px';
      circulo.Style.height = novoTamanho + 'px';
}