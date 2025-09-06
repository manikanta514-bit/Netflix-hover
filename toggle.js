const toggle = document.getElementById('bgToggle');
toggle.addEventListener('change', () => {
    if(toggle.checked){
        document.body.style.background = 'linear-gradient(145deg, #00A0DF, #FF0000, #6E2CA5)';
    } else {
        document.body.style.background = 'black';
    }
});
