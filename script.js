const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector(".site-menu");
const form = document.querySelector(".form-contato");
const formStatus = document.querySelector(".form-status");

if (menuToggle && siteMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = siteMenu.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    siteMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            siteMenu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const telefone = form.telefone.value.trim();
        const mensagem = form.mensagem.value.trim();

        if (!nome || !email || !telefone || !mensagem) {
            formStatus.textContent = "Preencha todos os campos para enviar seu pedido.";
            return;
        }

        if (!form.email.validity.valid) {
            formStatus.textContent = "Informe um email válido para retorno.";
            form.email.focus();
            return;
        }

        const assunto = encodeURIComponent(`Orçamento pelo site - ${nome}`);
        const corpo = encodeURIComponent(
            [
                `Nome: ${nome}`,
                `Email: ${email}`,
                `Telefone: ${telefone}`,
                "",
                "Mensagem:",
                mensagem,
            ].join("\n")
        );
        const destinatario = "contato@graficacriativa.com.br";

        formStatus.textContent = "Abrindo seu aplicativo de email...";
        window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
        form.reset();

        setTimeout(() => {
            formStatus.textContent = "";
        }, 3500);
    });
}
