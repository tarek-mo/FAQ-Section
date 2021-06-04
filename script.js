(() => {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', (e) => {
            const container = e.target.closest('.qa')
            container.classList.toggle('active');
        })
    })
})();