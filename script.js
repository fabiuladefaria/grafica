// Seleciona o formulário
const form = document.querySelector('.form-contato');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio padrão

    // Pega os valores dos campos
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const mensagem = form.mensagem.value.trim();

    // Verifica se todos os campos foram preenchidos
    if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Monta a mensagem do email
    const assunto = encodeURIComponent(`Contato do site - ${nome}`);
    const corpo = encodeURIComponent(
        `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
    );

    // Email de destino
    const destinatario = 'contato@graficacriativa.com.br'; // Substitua pelo seu email

    // Abre o cliente de email do usuário
    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;

    // Limpa o formulário
    form.reset();
});
