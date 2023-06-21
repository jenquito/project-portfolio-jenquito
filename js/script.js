let themeDots = document.getElementsByClassName('theme_dot')

let theme = localStorage.getItem('theme')

if (theme == null){
    themeSelect('default')
}else{
    themeSelect(theme)
}

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Clicked', mode)
        themeSelect(mode)
    })
}

function themeSelect(mode){
    if (mode == 'default'){
        document.getElementById('theme_color').href = 'style.css'
    }

    if (mode == 'purple'){
        document.getElementById('theme_color').href = 'purple.css'
    }

    if (mode == 'blue'){
        document.getElementById('theme_color').href = 'blue.css'
    }

    if (mode == 'red'){
        document.getElementById('theme_color').href = 'red.css'
    }

    localStorage.setItem('theme', mode)
}