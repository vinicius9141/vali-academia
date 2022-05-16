let escreve = 0

async function getID (){
    let recoverID = document.getElementById('getid').value
    recoverID = parseInt(recoverID)
    console.log(recoverID)
   let request=  await axios.get('http://servicodados.ibge.gov.br/api/v3/noticias/')
   console.log(request.data.items[0].id)


   for (let  i= 0; i <= request.data.items.length; i++){
       if(recoverID == request.data.items[0].id ){
           escreve = 33703
           buildQr(escreve, recoverID)
           break
       }else{
           console.log('ID inexistente')
       }
   }

   return recoverID
}

function buildQr(escreve,recoverID){
   let qrCode = new QRCode(document.getElementById("qrcode"), {
        text: 'Vinicius',
        idUser: escreve,
        width: 300,
        height: 300,
        colorDark : "#FF7F50",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    console.log("escreveu isso " + qrCode._htOption.idUser)

    if (qrCode._htOption.idUser === recoverID){
        Swal.fire({
            title: `Cadastro do aluno(a) ${qrCode._htOption.text}`,
            text: `Id de aluno(a) ${qrCode._htOption.idUser}`,
            icon: 'info',
            html:
                `<button>Pagamento de mensalidade</button>
                <button>Pagamento de graduação</button>
                <button>Outros</button>` 
          })
    }
        else{
            alert('não caiu aqui')
        }
   qrcode.clear()
}
