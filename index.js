import express from "express"
import bancoDeDados from "./repository/index.js";

const app = express();

app.get("/api/v1/dog", (req, res) => {
    const {nome, raca, idade} = req.query

    
    if(!nome || !raca) {
    res.status({message:"Hello World!"});
    }

    const pessoa = {
        nome
        raca
    }

    bancoDeDados.push(pessoa)
    
    res.send({message: "Pessoa adicionada com sucesso! "})
});

app.get("/api/dog/:nome", (req, res) => {
    const nome = req.params.nome
    const raca = bancoDeDados.find(p => p.nome === nome)
});

app.get("/api/dogs", (req, res) => {

});

app.delete("/api/delete", (req, res) => {

});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})