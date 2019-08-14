const mysql = require('../services/database')

const simulacao = {
    processos:{}
}

const addProcessos = function(idSimulacao,processos){
    processos.forEach(value => {
        mysql.query('INSERT INTO processos(identificador,tamanho,id_Simulacao) values ("'+value.id+'",'+value.bytes+','+idSimulacao+')', success_=> console.log(success_) ,error=> console.log(error) )
    });
}

simulacao.list = (req,res)=>{ mysql.query('SELECT * FROM simulacoes ORDER BY nome ASC' , success=> res.json(success ) , error=> console.log(error) ); };

simulacao.add = (req,res)=>{
    const simulacao = req.body;

    mysql.query('INSERT INTO simulacoes(nome) VALUES ("'+simulacao.nome+'")' , success=>{
       
        addProcessos( success.insertId , simulacao.processos );

        res.json( {sucesso: true, msg:'Simulação salva '+simulacao.nome+' com sucesso.'} )   

    }, error=> res.json( { sucesso: false, msg: 'Nome '+simulacao.nome+' já cadastrado.' }) )

};

simulacao.processos.list = (req,res)=>{ mysql.query('SELECT * FROM processos WHERE id_Simulacao = ' + req.params.idSimulacao , success=> res.json(success ), error=> res.json(error) ); };

simulacao.processos.update = (req,res)=>{
    const processos = req.body.processos;
    const nomeSimulacao = req.body.nomeSimulacao;
    const idSimulacao = req.params.idSimulacao;

    mysql.query('DELETE FROM processos WHERE id_Simulacao = ' +  idSimulacao , success=>{
            
        addProcessos( idSimulacao , processos );
        res.json( {sucesso: true, msg:'Simulação '+nomeSimulacao+' alterada com sucesso.'} );

    } , error=> console.log(error) );
};

module.exports = simulacao;
