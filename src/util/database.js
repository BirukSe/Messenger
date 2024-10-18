import pg from 'pg';
const db=new pg.Client({
    user: "birukee",
    database: "Blog",
    password: "new_password",
    port: 5432
})
db.connect();
export default db;