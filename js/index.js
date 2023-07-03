var n1 = "0";
var sinal = null;
var n2 = '';
function number(n) {
    if(sinal !== null){
        n2 = n2 + n
        visor(n2)
    }else{
        if(n1 == "0"){
            n1 = n;
    
        }else{
            n1 = n1 + n
        }
        console.log( n1)
        visor(n1)
    }
    
}

function visor (conteudo){
    var visor = document.querySelector("#visor");
    visor.innerHTML = conteudo
}

function operador(opr){

    
    if(sinal == null || n2 == ''){
        sinal = opr;
    }else{
        var resposta = calculo();
        n1 = resposta;
        sinal = opr;
        n2 = '';
        visor(n1);
    }

    console.log(n1,sinal,n2)
}


function calculo(){
    var _n1 = parseFloat(n1)
    var _n2 = parseFloat(n2)
    var res = 0;
    switch(sinal){
        case "+":
            res = _n1 + _n2;
            break;
    }
    switch(sinal){
        case "-":
            res = _n1 - _n2;
            break;
    }
    switch(sinal){
        case "*":
            res = _n1 * _n2;
            break;
    }
    switch(sinal){
        case "/":
            res = _n1 / _n2;
            break;
    }
        
    
    res.toFixed(12)
    return res;
}


function zerar(){
    console.log("zerar")
    var zerado = innerHTML = ''
    n1 = "0";
    n2 = '';
    sinal = null;
    visor(zerado)
}

