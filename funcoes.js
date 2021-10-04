const cachorros = require('./database/cachorros.json');
const fs = require('fs')

module.exports = {
    listar: function(){
        console.table(cachorros);
    },
    descrever: function(pos){
        if(pos >= cachorros.length || pos < 0){
            console.error("!Cachorro inexistente!");
            return;
        }

        let c = cachorros[pos]
        console.log(`nome: ${c.nome}`);
        console.log(`sexo: ${c.sexo}`);
        console.log(`peso: ${c.peso}`);
        if(c.castrado){
            console.log("castrado: sim")
        }else{
            console.log("castrado: não")
        }
        console.log(`dataDeNascimento: ${c.dataDeNascimento}`);
        console.log("vascinas:")
        console.table(c.vacinas);
        console.log("serviços:")
        console.table(c.servicos);
    },
    
    adicionar:function($nome,$sexo,$castrado,$dataDeNascimento,$peso){
        //objeto cachorro;
        //adicionar o cachorro criado a aeeay de cachorros ;
        //gravar array de cachorros no arquivo cachorros.json;
        let dog = {
            nome:$nome,
            sexo:$sexo,
            castrado:$castrado,
            dataDeNascimento:$dataDeNascimento,
            peso:$peso,
            vacinas:[],
            servicos:[]
        }

        cachorros.push(dog);

        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros));
    }

        
}
