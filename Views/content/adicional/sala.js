var sala = function () {
    var controles = function () { 
        
    };

    var CriaNumeroSalas = function(){
       return Math.floor((Math.random()*10) + 1); //cria salaaleatoria  
    };

    return {
        controles: controles,
    };
}();