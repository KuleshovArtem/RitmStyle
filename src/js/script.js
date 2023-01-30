window.addEventListener('DOMContentLoaded', () => {
    // reviews tabs///

    const tabs = document.querySelectorAll('.controls__item');
    const tabsContent = document.querySelectorAll('.reviews__item');
    const tabsSubtitle = document.querySelectorAll('.reviews__subtitle');
    const tabsText = document.querySelectorAll('.reviews__text');

    const tabsParent = document.querySelector('.reviews__wrapper');

    function hideTabContent () {
        tabsContent.forEach(item => {
            item.classList.remove('reviews__item-active');
        });
        tabsSubtitle.forEach(item => {
            item.classList.remove('reviews__subtitle-active');
        });
        tabsText.forEach(item => {
            item.classList.remove('reviews__text-active');
        });

        tabs.forEach(item => {
            item.classList.remove('controls__item-active');
        });
    }

    function showTabContent (i = 1) {
        tabsContent[i].classList.add('reviews__item-active');
        tabsSubtitle[i].classList.add('reviews__subtitle-active');
        tabsText[i].classList.add('reviews__text-active');
        tabs[i].classList.add('controls__item-active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target) {
            tabsContent.forEach((item, i) => {
                if(target == item && target.classList.contains('reviews__item')) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
        if(target) {
            tabsText.forEach((item, i) => {
                if(target == item && target.classList.contains('reviews__text')) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // modal //

    const modalTriger = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('[data-close]');

 
    
    modalTriger.forEach( btn => {
        btn.addEventListener('click', () => {
            modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';
        } );
    });

    function closeModal () {
        modal.classList.toggle('show');
        document.body.style.overflow = 'auto';
    }
    
    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if(event.target == modal) {
           closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code == 'Escape' && modal.classList.contains('show')) {
            closeModal();
        } 
    });

});
