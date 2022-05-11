let escreve = 'vazio'
function teste(nome){
    alert(`${nome } esta acessando Script.js`)
}

async function getID (){
    let recoverID = document.getElementById('getid').value
    recoverID = parseInt(recoverID)
    console.log(recoverID)
   let request=  await axios.get('http://servicodados.ibge.gov.br/api/v3/noticias/')
   console.log(request.data.items[0].id)


   for (let  i= 0; i <= request.data.items.length; i++){
       if(recoverID == request.data.items[0].id ){
           escreve = ('ora ora achamos voce')
           buildQr(escreve)
           break
       }else{
           console.log('ID inexistente')
       }
   }

   return escreve
}

function buildQr(escreve){
   let qrcpde = new QRCode(document.getElementById("qrcode"), {
        text: 'Vinicius',
        idUser: escreve,
        width: 300,
        height: 300,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
   console.log("escreveu isso " + qrcpde._htOption.idUser)
   qrcode.clear()
}
