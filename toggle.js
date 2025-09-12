const toggle = document.getElementById('bgToggle');
toggle.addEventListener('change', () => {
    if(toggle.checked){
        document.body.style.background = 'linear-gradient(145deg, #ff6600)';
    } else {
        document.body.style.background = 'black';
    }
});
