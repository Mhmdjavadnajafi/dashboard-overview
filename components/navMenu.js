import { showMenu } from '../components/showMenu.js';

export function navSet() {
    showMenu();

    let nav = document.querySelector('nav');
    let navToggleImg = document.querySelector('.nav-toggle-img');
    let navLocationRight = document.querySelector('.nav-location-right');
    let navItemText = document.querySelectorAll('.nav-item-text');
    let navItemTextTitle = document.querySelectorAll('.nav-item-text-title');
    let navLocation = document.querySelector('.nav-location-name');
    let up = document.querySelector('.fa-angle-up');
    let down = document.querySelector('.fa-angle-down');
    let i = 0;

    if (!navToggleImg || !nav || !navLocationRight || !up || !down) return;

    navToggleImg.addEventListener('click', () => {
        let navStatus = nav.classList.contains('nav-active');

        if (!navStatus) {
            nav.classList.add('nav-active');
            navLocationRight.classList.add('nav-location-right-active');

            up.addEventListener('click', () => {
                if (i === 0) {
                    navItemText.forEach(item => item.classList.remove('activated'));
                    navItemText[0]?.classList.add('activated');
                    navLocation.textContent = navItemTextTitle[0]?.textContent || '';
                    showMenu(navItemText[0]?.id);
                } else {
                    i--;
                    navItemText.forEach(item => item.classList.remove('activated'));
                    navItemText[i]?.classList.add('activated');
                    navLocation.textContent = navItemTextTitle[i]?.textContent || '';
                    showMenu(navItemText[i]?.id);
                }
            });

            down.addEventListener('click', () => {
                if (i === navItemText.length - 1) {
                    navItemText.forEach(item => item.classList.remove('activated'));
                    navItemText[i]?.classList.add('activated');
                    navLocation.textContent = navItemTextTitle[i]?.textContent || '';
                    showMenu(navItemText[i]?.id);
                } else {
                    i++;
                    navItemText.forEach(item => item.classList.remove('activated'));
                    navItemText[i]?.classList.add('activated');
                    navLocation.textContent = navItemTextTitle[i]?.textContent || '';
                    showMenu(navItemText[i]?.id);
                }
            });

            navItemText.forEach((item, index) => {
                item.classList.add('nav-item-text-active');
                navItemTextTitle[index]?.classList.add('nav-item-text-title-active');

                item.addEventListener('click', () => {
                    navItemText.forEach(i => i.classList.remove('activated'));
                    item.classList.add('activated');

                    let count = index;
                    navLocation.textContent = navItemTextTitle[count]?.textContent || '';
                    showMenu(item.id);

                    up.addEventListener('click', () => {
                        if (count === 0) {
                            navItemText.forEach(i => i.classList.remove('activated'));
                            item.classList.add('activated');
                            navLocation.textContent = navItemTextTitle[count]?.textContent || '';
                            showMenu(item.id);
                        } else {
                            count--;
                            navItemText.forEach(i => i.classList.remove('activated'));
                            navItemText[count]?.classList.add('activated');
                            navLocation.textContent = navItemTextTitle[count]?.textContent || '';
                            showMenu(navItemText[count]?.id);
                        }
                    });

                    down.addEventListener('click', () => {
                        if (count === navItemText.length - 1) {
                            navItemText.forEach(i => i.classList.remove('activated'));
                            navItemText[count]?.classList.add('activated');
                            navLocation.textContent = navItemTextTitle[count]?.textContent || '';
                            showMenu(navItemText[count]?.id);
                        } else {
                            count++;
                            navItemText.forEach(i => i.classList.remove('activated'));
                            navItemText[count]?.classList.add('activated');
                            navLocation.textContent = navItemTextTitle[count]?.textContent || '';
                            showMenu(navItemText[count]?.id);
                        }
                    });
                });
            });
        } else {
            nav.classList.remove('nav-active');
            navLocationRight.classList.remove('nav-location-right-active');
            navItemText.forEach((item, index) => {
                item.classList.remove('nav-item-text-active');
                navItemTextTitle[index]?.classList.remove('nav-item-text-title-active');
            });
        }
    });
}
