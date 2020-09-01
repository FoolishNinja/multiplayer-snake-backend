import BaseModule from "../models/BaseModule";
import Status from "../models/Status";
import User from "../entities/User";

export default class UserModule extends BaseModule {

    constructor() {
        super();
        this.AddTask('register', (data, callback) => this.register(data, callback));
    }

    private async register(data, callback) {
        const { username, email, password } = data;
        if (!username || !email || !password) {
            callback(Status.BadRequest('Please provide username, email and a password'));
            return;
        }
        if (!global.Regex.email.test(email)) {
            callback(Status.BadRequest('Email is invalid'));
            return;
        }
        console.log(data);
        await User.save(new User(username, email, global.Text.SHA256(password)));
        callback(Status.Ok());
    }
}