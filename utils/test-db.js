const db = require('./database');

const testDB = async() => {
    try{
        const res = await db.query(`select * from card_38`);
        console.log('json data', JSON.stringify(res.rows));
    }catch(error){
        console.log('error');
    }
}

testDB();

module.exports = testDB;