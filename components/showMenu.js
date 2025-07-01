export function showMenu(query){
    let mainBox = document.querySelectorAll('.main > div');
    let navItemText = document.querySelectorAll('.nav-item-text')
    mainBox.forEach(div=>div.style.display = 'none')
    document.querySelector(`.overview`).style.display = 'flex'
    return navItemText.forEach(item=>{
        if(item.id === query){
            mainBox.forEach(div => div.style.display = 'none')
            document.querySelector(`.${query}`).style.display = 'flex'
        }
    })
} 