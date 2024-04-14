document.addEventListener("DOMContentLoaded", () => {
    const submit = document.querySelector('button');
    const feedback = document.querySelector('.feedback');
    const response = document.querySelector('.response');
    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach( (radio) => {
        radio.addEventListener('click', function() {
            let listItem = this.closest('li');
            let label = listItem.querySelector('label');
            let selected = label.textContent;

            document.querySelector('.choice').textContent = selected;
        });
    });

    submit.addEventListener('click', (ev) => {
        ev.preventDefault();

        let check = document.querySelectorAll('input[name="rating"]:checked');

        if(check.length === 0) {
            alert('Please select an option.');
        } else {
            feedback.style.display = 'none';
            response.style.display = 'flex';
        }
    });
});