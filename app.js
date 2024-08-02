import  express  from "express";

const servidor =express()

servidor.use (express.json());

servidor.get("/vai",(req,resp)=>{

    
    resp.send({mensagen:'ola mundo'})
})

servidor.get("/vai/merda",(req,resp)=>{
    resp.send("boaa lenda")
})

servidor.get("/vai/soma/:n1/:n2",(req,resp)=>{
   let n1 =Number( req.params.n1);
   let n2 =Number(req.params.n2);
   let soma = n1+n2;
    resp.send("a soma e " + soma);
})

servidor.get("/vai/soma2",(req,resp)=>{
    let n1 =Number( req.query.n1);
    let n2 =Number(req.query.n2);
    let soma = n1+n2;
     resp.send("a soma e " + soma);
}) 

servidor.get("/vai/tomando",(req,resp)=>{
    let fulano= req.query.nome ?? "?????";
    resp.send("salve "+fulano);
})

servidor.post("/vai/tomando/nota",(req,resp)=>{
    let n1= req.body.nota1;
    let n2= req.body.nota2;
    let n3= req.body.nota3;
    let media = (n1+n2+n3)/3
    resp.send("a media e "+media)
})

servidor.listen(5001,()=>console.log("foi?"))