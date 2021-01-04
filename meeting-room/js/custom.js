let toggle = document.querySelector('.switch-btn-new');

if(localStorage.getItem('dark-mode')){
    document.body.classList.add('dark-mode');
    console.log('dark mode on')
}

toggle.addEventListener('click', function(){
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode');
        console.log('dark mode on');
        localStorage.removeItem('dark-mode')
    }
    else{
        document.body.classList.add('dark-mode');
        console.log('dark theme off');
        localStorage.setItem('dark-mode', true);
    }
});
