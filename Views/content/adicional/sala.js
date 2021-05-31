var sala = function () {

    var controles = function () {
        return {
            DivChat: ".messages",
            txtTexto: "#txtText",
        };
    };

    var CriaNumeroSalas = function () {
        return Math.floor((Math.random() * 10) + 1); //cria salaaleatoria  
    };

    var adicionarMensagem = function () {
        debugger
        $(".messages").append('<div ><strong>' + 'Usuario123' + '</strong>: ' + GetMensagem() + '</div><hr>')


    };
    var GetMensagem = function () {
        var texto = $("#txtText").val();
        $("#txtText").val('');
        return texto;
    };

    return {
        controles: controles,
        adicionarMensagem: adicionarMensagem
    };
}();