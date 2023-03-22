require('dotenv').config();
const { Pool } = require('pg');

let pool;

if(process.env.DATABASE === 'SUPABASE'){
    pool = new Pool({
        user:'postgres',
        host:process.env.SUPABASE_HOST,
        port:'5432',
        database:'postgres',
        password:process.env.SUPABASE_PASSWORD
    });
    console.log(`Connecting SUPABASE database ${pool.options.database} on port ${pool.options.port}`);
}else{
    pool = new Pool({
        user:'postgres',
        host:'localhost',
        port:'5432',
        database:'wp2_demo_38',
        password:'postgres'
    });
    console.log(`Connecting PostgreSQL database ${pool.options.database} on port ${pool.options.port}`);
    //console.log(process.env.NODE_ENV)
}



module.exports = pool;