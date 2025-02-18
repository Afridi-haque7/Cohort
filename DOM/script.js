
const changeTheme = document.getElementById("theme-btn");
changeTheme.addEventListener('click', function(){
    const currColor = document.body.style.backgroundColor;
    if(currColor == 'black'){
        document.body.style.backgroundColor = 'white';
        changeTheme.innerText = 'Dark Mode';
    }else{
        document.body.style.backgroundColor = "black";
        changeTheme.innerText = "Light Mode";
    }
})