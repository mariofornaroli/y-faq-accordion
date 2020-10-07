window.addEventListener('load', () => {

    const buttons = document.querySelectorAll('button');

    buttons.forEach(buttonEl => {
        buttonEl.addEventListener('click', function() {

            const isCurrentClosed = !this.classList.contains('opened');

            /* Close all accordions */
            buttons.forEach(el => el.classList.remove('opened'));

            /* If current clicked is closed, 
            then open it adding 'opened' class */
            if (isCurrentClosed) {
                this.classList.add('opened');
            }
        })
    })
})