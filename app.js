const knex = require('knex')

const data_base = knex({
    client: 'sqlite3',
    connection: {
        filename: 'our_db.db'
    },
    useNullAsDefault: true
})

// GET GET/ID POST PUT DELETE 

async function create_table() {
    await data_base.raw(`CREATE TABLE IF NOT EXISTS COMPANY (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NAME TEXT NOT NULL,
        AGE INT NOT NULL,
        ADDRESS CHAR(50),
        SALARY REAL);`);
}

// insert_rows()

async function get_all() {
    const employees = await data_base.raw("select * from COMPANY")
    console.log(employees);
}

create_table()
insert_rows()
get_all()