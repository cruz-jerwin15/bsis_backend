const pool = require('../config/db');


class User{
    //Get all records
    static async getAllUsersModel(){
        const [rows] = await pool.query('SELECT * FROM tbl_user');
        return rows;
    }

    //add new records
    static async addUserModel(data){
        const {firstname, lastname} = data;
        const status = "ACTIVE";
        // const firstname = data.firstname;
        // const lastname = data.lastname;
        const [results] = await pool.query(`INSERT INTO tbl_user (firstname,lastname,status)
            values(?,?,?)`,[firstname,lastname,status]);
        // const [results] = await pool.query(`INSERT INTO tbl_user (firstname,lastname)
        //     values(${firstname},${lastname})`);
        return results.insertId;

    }
   
}

module.exports =User;