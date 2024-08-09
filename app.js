import  express  from "express";

const servidor =express()

servidor.use (express.json());


servidor.post("/treino/leituraLivro",(req,resp)=>{
    let paginaslidas = req.body.paginas;
    let tempo = req.body.tempoPorPagina;

    let total = paginaslidas * tempo;
    let horas = total / 3600;

    resp.send({
        tempoLeitura: horas
    })
})

servidor.get("/treino/combinacaoCores/:cor1/:cor2",(req,resp)=>{
    let pcor =req.params.cor1
    let scor =req.params.cor2

    if(pcor=="azul"&&scor=="vermelho"){

        resp.send({ 
            corResultante:"roxo"
        })

  }

    
})

servidor.post("/treino/cinema/validacao",(req,resp)=>{
    let pessoa1 =Number(req.body.idadePessoa1)
    let pessoa2 =Number(req.body.idadePessoa2)
    let classificaçaofilme =Number(req.body.classificaçao)

    if (pessoa1>=classificaçaofilme && pessoa2>=classificaçaofilme){

        resp.send({
            podeAssistir: true
        })
       
    }
    else {
        resp.send({
            podeAssistir: false
        })
    }


   
 
  
})

servidor.get("/treino/tabuada/:n1",(req,resp)=>{
   let zero = 0;
   let numero = Number(req.params.n1);
   let array =[];

   for(let i =0; i<=10;i++){

    let multiplica = numero * zero;
    zero++;
    array[i]=multiplica
   }

   resp.send(console.log(array))
   
})





servidor.listen(5001,()=>console.log("foi?"))