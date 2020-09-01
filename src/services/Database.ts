import { createConnection, Connection } from 'typeorm';
export default class Database {
    private connection: Connection;

    public async Start() {
        return new Promise((resolve, reject) => {
            createConnection()
                .then(connection => {
                    this.connection = connection;
                    global.Database = this;
                    console.info('Database started successfully');
                    resolve();
                })
                .catch(err => reject(err));
        });
    }

    public static get Connection(): Connection { return global.Database.connection }
}