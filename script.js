function enviar(event) {
    event.preventDefault()
    const nome = document.getElementById('nome').value;
    const texto = document.getElementById('texto').value;
    const telefone = '5519995937457'

    const text = `Olá! Me Chamo ${nome}, ${texto}`
    const msgformatada = encodeURIComponent(text)
    const link = `https://wa.me/${telefone}?text=${msgformatada}`

    window.open(link, '_blank')
}


