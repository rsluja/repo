function validateForm() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if(login!=='wsb' && password !== 'angular') {
    
        alert("niepoprawne dane");
    }
}