

/* IMPORTA O BANCO DE DADOS "mysql2" */
import mysql from 'mysql2';


/* FAZ A CONEXÃO COM O BANCO DE DADOS */
const connection = mysql.createConnection({
    host: 'localhost',      /* Local onde será hospedado (host) */
    user: 'root',           /* Dando nome ao usuário administrador para acessar o banco */
    password: 'Admin@123',  /* Senha para acessar o administrador acessar o banco (caso o banco não tenha uma senha, esse local deve estar em branco) */
    database: 'lojadb'      /* Nome do banco de dados */
});


/* VERIFICA SE A CONEXÃO COM O BANCO DEU CERTO */
connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao banco de dados: lojadb } `);
});

export default connection;