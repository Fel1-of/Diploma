const faq = () => {
    const accordion = document.querySelector('.accordion');
    accordion.addEventListener('click', event => {
        const target = event.target;
        if (target.matches('.title_block')) {
            for(let i of accordion.children[0].children){
                i.children[0].classList.remove('msg-active');
            }
            target.classList.toggle('msg-active');
        }
    });
};

export default faq;
