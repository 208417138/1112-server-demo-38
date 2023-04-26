const db = require('./database');

const testDB = async () => {
    try {
        let results1 = await db.query(`select * from menu_38`);
        console.log('All data: ', JSON.stringify(results1.rows), '\n');
        let results2 = await db.query(`select * from menu_38 where category = 'breakfast'`);
        console.log('Breakfast data: ', JSON.stringify(results2.rows));
      } catch (error) {
        console.log(error);
      }
};

testDB();

module.exports = testDB;
