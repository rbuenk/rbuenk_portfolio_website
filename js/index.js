const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Modal handling
const openModal = (modal) => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
};

const closeModal = (modal) => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
};

document.querySelectorAll('[data-modal-open]').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modal = document.getElementById(`modal-${trigger.dataset.modalOpen}`);
        if (modal) openModal(modal);
    });
});

document.querySelectorAll('[data-modal-close]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) closeModal(modal);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.is-open').forEach(closeModal);
    }
});

document.querySelectorAll('[data-copy-email]').forEach(button => {
    button.addEventListener('click', async () => {
        const email = button.dataset.copyEmail;
        try {
            await navigator.clipboard.writeText(email);
            const label = button.textContent;
            button.textContent = 'Copied!';
            setTimeout(() => { button.textContent = label; }, 2000);
        } catch {
            window.prompt('Copy this email address:', email);
        }
    });
});
