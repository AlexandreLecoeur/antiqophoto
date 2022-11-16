const client = require('../../config/client');

module.exports = class CoreDatamapper {
    static async findAll() {
        const sqlQuery = `SELECT * FROM "${this.tableName}"`;
        const result = await client.query(sqlQuery);

        return result.rows;
    }

    static async findOne(id) {
        const sqlQuery = `SELECT * FROM "${this.tableName}" WHERE id = $1`;
        const result = await client.query(sqlQuery, [id]);
        return result.rows[0];
    }

    static async findByEmail(email) {
        const sqlQuery = `SELECT * FROM "${this.tableName}" WHERE email = $1`;
        const result = await client.query(sqlQuery, [email]);
        return result.rows[0];
    }

    static async createOneUser(data) {
        const sqlQuery = 'SELECT * FROM insert_user ($1)';
        const result = await client.query(sqlQuery, [data]);
        return result.rows;
    }

    static async delete(id) {
        const sqlQuery = `DELETE FROM "${this.tableName}" WHERE id = $1`;
        const result = await client.query(sqlQuery, [id]);
        return result.rows;
    }

    static async accountUpdate(id, account) {
        const sqlQuery = 'SELECT * FROM update_users($1,$2)';
        const result = await client.query(sqlQuery, [id, account]);
        return result.rows;
    }
};
