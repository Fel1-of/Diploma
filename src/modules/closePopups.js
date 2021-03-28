const closePopups = () => {
    const allCloseButtons = [...document.querySelectorAll('.close')];
    allCloseButtons.forEach(button => {
        if (button.closest('.popup')) {
            const buttonParent = button.closest('.popup');
            button.addEventListener('click', () => {
                buttonParent.style.visibility = 'hidden';
            });
        }
    }); 
    const popups = [...document.querySelectorAll('.popup')];
    popups.forEach(e=>{
        e.addEventListener('click', (event)=>{
            const target = event.target;
            if(target.classList.contains('popup')) e.style.visibility = 'hidden';
        });
    });
};

export default closePopups;
