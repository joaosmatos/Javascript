// promises -> promessas

function notificaUsuario(sms, email) {
    console.log("começa notificção");
    sms();
    email();
}

notificaUsuario(
    function () {
        console.log("sms notificando...")
    },
    function () {
        console.log("email notificado...")
    }
)
console.log("end");