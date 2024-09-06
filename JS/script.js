

function diasShow(){
    var diaShow = document.getElementById('diaShow')
    var diaHoje = document.getElementById('diaHoje')
    var n1 = Number(diaHoje.value);
    var n2 = Number(diaShow.value);
    var n3 = n2 - n1
    dia.innerHTML= `FALTAM ${n3} DIAS PARA O SHOW DA DIVA`
}