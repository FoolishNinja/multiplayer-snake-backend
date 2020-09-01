import BaseModule from "../models/BaseModule";
import Status from "../models/Status";
import User from "../entities/User";

export default class AuthModule extends BaseModule {
    /**
     * Auth module class constructor. Socket.io authentication module --> Provides jwt
     */
    constructor() {
        super();
        this.AddTask('login', async (data, callback) => await this.Login(data, callback));
    }

    /**
     * Called by frontend to login. Resolves an error or jwt
     * @param {any} data {username: 'muster', password: 'password'}
     * @param {Function} callback Callback function to frontend with response 
     */
    private async Login(data: any, callback: Function) {
        let { username, password } = data;
        if (!username || !password) {
            callback(Status.BadRequest('Please provide your email and your password.'));
            return;
        }
        if (typeof username !== 'string' || typeof password !== 'string') {
            callback(Status.BadRequest('One of the provided fields has invalid type.'));
            return;
        }

        let user: User = await User.findOne({ where: { username } });
        if (!user || user.password !== global.Text.SHA256(password)) {
            callback(Status.BadRequest('Wrong email or password.'));
            return;
        }

        const token: string = global.Text.JWT({ id: user.id });
        callback(Status.Ok(token));
    }
}