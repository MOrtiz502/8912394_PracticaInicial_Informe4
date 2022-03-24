//import mysql from 'promise-mysql';

import mysql from 'mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection(function(err, connection){
    if(err){
        console.log('Error de Conexion a la base de datos: ' + err)
        return err;
    }
    console.log('Database is connected');
});
    

export default pool;
