let projects = [
    {
        name: 'burger',
        image: 'img/burger.png',
        paragrafo: 'site responsivo de hamburgueria com design moderno, cardápio interativo e pedido via WhatsApp. Ideal para exibir Minhas habilidades em HTML, CSS e JavaScript.',
        link: 'https://giovanimanzattof.github.io/portifolio-giovani-2.0/',
        botao: 'Ver Projeto'
    },
    {
        name: 'Pizzaria',
        image: 'img/pizzaria.png',
        paragrafo: `site de pizzaria responsivo, com design limpo e navegaçãointuitiva. Apresenta cardápio com fotos, descrições e botões de pedido via WhatsApp, seção“Sobre” com a história da pizzaria e uma página de contato com endereço e formulário. Ideal paramostrar habilidades em HTML/CSS/JS e experiência no desenvolvimento de sites para negócioslocais.`,
        link: 'https://giovanimanzattof.github.io/pizzaria/',
        botao: 'Ver Projeto'
    },
    {
        name: 'Café Aroma',
        image: 'img/cafe.png',
        paragrafo: 'site responsivo de Cafeteria com design moderno. Ideal para exibir Minhas habilidades em HTML e CSS.',
        link: 'https://giovanimanzattof.github.io/cafeteria/',
        botao: 'Ver Projeto'
    },
    {
        name: 'SportCars',
        image: 'img/carros.png',
        paragrafo: 'site responsivo que reúne modelos, comparativos e curiosidades automotivas, com foco em superesportivos, elétricos e híbridos.',
        link: 'https://giovanimanzattof.github.io/carros/',
        botao: 'Ver Projeto'
    },
    {
        name: 'Cordel',
        image: 'img/cordel.png',
        paragrafo: 'Site de cordel com design moderno, com imagens interativas. Ideal para exibir Minhas habilidades em HTML e CSS.',
        link: 'https://giovanimanzattof.github.io/projeto-cordel/',
        botao: 'Ver Projeto'
    },
    {
        name: 'Restaurante',
        image: 'img/restaurante.png',
        paragrafo: 'site responsivo de Restaurante com design moderno. Ideal para exibir Minhas habilidades em HTML e CSS, Fiz esse site para saber mais sobre display Grid.',
        link: 'https://giovanimanzattof.github.io/restaurante/',
        botao: 'Ver Projeto'
    },
    {
        name: 'BelezaGio',
        image: 'img/salao de beleza.png',
        paragrafo: 'site responsivo de Salão de Beleza com design moderno. Pensei em fazer algo que fosse diferente.',
        link: 'https://giovanimanzattof.github.io/salao-de-beleza/',
        botao: 'Ver Projeto'
    }
]

function criarprojetos(projetos) {
    return `
        <div class="projeto-card">
                <img src="${projetos.image}" alt="projeto 1" class="projeto-imagem">
                <div class="caixa-texto-projetos">
                    <h3 class="projeto-item-titulo">${projetos.name}</h3>
                    <p class="projeto-item-descricao">${projetos.paragrafo}</p>
                    <a href="${projetos.link}" target="_blank" class="projeto-btn">${projetos.botao}</a>
                </div>
        </div>
    `
}

function exibirprojetos(projects) {
    const caixaprojetos = document.querySelector('.projeto-caixa')
    caixaprojetos.innerHTML = projects.map(criarprojetos).join('')
}
exibirprojetos(projects)

function enviar(event) {

    event.preventDefault()
    const nome = document.getElementById('nome').value;
    const texto = document.getElementById('texto').value;
    const botao = document.getElementById('botao')
    const telefone = '5519995937457'
    botao.Disabled = true
    botao.textContent = 'Carregando...'

    setTimeout(() => {
        botao.textContent = 'Enviar para o Whatsapp'
        const text = `Olá! Me Chamo ${nome}, ${texto}`
        const msgformatada = encodeURIComponent(text)
        const link = `https://wa.me/${telefone}?text=${msgformatada}`
        window.open(link, '_blank')
    }, 2000)



}




