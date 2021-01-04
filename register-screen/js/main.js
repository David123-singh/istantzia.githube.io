// ///////////// dark theme change
var theme = document.querySelector('#body-sec');
var currentTheme = localStorage.getItem('data-theme');
if (currentTheme) {
    theme.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        $("#switch-btn-new").prop('checked', true);
    }
    else{
        $("#switch-btn-new").prop('checked', false);
    }
}
else{
    $("#switch-btn-new").prop('checked', false);
}
function switchTheme(e) {
    if (!e.target.checked){
        theme.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
       
    }
    else{
        theme.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    }
}
