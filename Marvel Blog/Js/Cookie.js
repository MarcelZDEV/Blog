function setCookie(cname,cValue,exDays) {
    let d = new Date();
    d.setTime(d.getTime() + (exDays*24*60*60*1000));
    let expires = "expires=" + d.toString();
    document.cookie = cname + "=" + cValue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user=getCookie("username");
    if (user !== "") {
        console.log("Witaj ponownie " + user)
    } else {
        user = prompt("Proszę wpisz swoje imię:","");
        if (user !== "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}