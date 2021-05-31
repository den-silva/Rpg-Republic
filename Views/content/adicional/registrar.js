var registrar = function () {

    var controles = function () {

        return{
            txtUsuario: "#",
            txtUsuario: "#",
            txtUsuario: "#",
        }
    };

    var registrar = function(){
        if(validaUsuario)
        {
            alert("Usuario Cirado com Sucesso");
            window.location.href = "/home.html";
        }
        else
        {
            alert("Usuario Invalido");
        }
    };

    var validaUsuario = function(){

        return true;
    }

    return {
        registrar: registrar,
        controles: controles,
    };

}();