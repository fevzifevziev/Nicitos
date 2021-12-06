function Input(){
    login_ok = false;
    user_name = "";
    password = "";
    user_name = prompt("Логин","");
    user_name = user_name.toLowerCase();
    password = prompt("Пароль","");
    password = password.toLowerCase();
    if (user_name=="login" && password=="pass") {
     login_ok = true;
     window.location = "index.php";
    }
    if (user_name=="login" && password=="pass") {
     login_ok = true;
     window.location = "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD";
    }
    
    if (login_ok==false) alert("Неверный логин или пароль!");
    }