const knex = require('knex')

const data_base = knex({
    client: 'sqlite3',
    connection: {
        filename: 'our_db.db'
    },
    useNullAsDefault: true
})

// GET GET/ID POST PUT DELETE 

async function get_all() {
    const employees = await data_base.raw("select * from COMPANY")
    console.log(employees);
}

get_all()