import LogService from "../services/LogService";
import Database from "../services/Database";
import GlobalService from "../services/GlobalService";
import SocketService from "../services/SocketService";
import User from "../entities/User";

export default class App {
    private globalService: GlobalService;
    private logService: LogService;
    private socketService: SocketService;
    private database: Database;

    /**
     * App class constructor. This is the base class from which every component inherits
     */
    constructor() {
        this.globalService = new GlobalService();
        this.logService = new LogService();
        this.socketService = new SocketService();
        this.database = new Database();
        this.Start();
    }

    private async Start() {
        try {
            await this.database.Start();
            this.Test();
        }
        catch (err) {
            this.database = null;
            this.socketService = null;
            console.info('Shutting down');
        }
    }

    /**
     * Use this function for testing purposes
     */
    private async Test() {
        const time = Date.now();
        //await User.Create(new User(new Language('de'), new DataUsagePermissions(false, false, false), new Notifications(false, false, false, false)));
        //await Faq.Create(new Faq('How high is Mount Everest?', '8’848 m'));
        console.info(`Delta time for test function was ${Date.now() - time}ms`);
    }
}