export default class Status {
    private name: string;
    private message: string;
    private statusCode: number;

    /**
     * Status class constructor. Status sent as response to frontend.
     * @param {string} name Status name 
     * @param {string} statusCode 
     * @param {string} message Custom status message 
     */
    constructor(name: string, statusCode: number, message: string) {
        this.name = name;
        this.statusCode = statusCode;
        this.message = message;
    }

    public static Ok(message?: string): Status { return new Status('OK', 200, message ? message : 'Ok') }
    public static NoContent(message?: string): Status { return new Status('NO_CONTENT', 202, message ? message : 'No content') }
    public static BadRequest(message?: string): Status { return new Status('BAD_REQUEST', 400, message ? message : 'Bad request') }
    public static Unauthorized(message?: string): Status { return new Status('UNAUTHORIZED', 401, message ? message : 'Unauthorized') }
    public static Forbidden(message?: string): Status { return new Status('FORBIDDEN', 403, message ? message : 'Forbidden') }
    public static NotFound(message?: string): Status { return new Status('NOT_FOUND', 404, message ? message : 'Not found') }
    public static InternalServerError(message?: string): Status { return new Status('INTERNAL_SERVER_ERROR', 500, message ? message : 'Internal server error') }


    public get Name(): string { return this.name }
    public get Message(): string { return this.message }
    public get StatusCode(): number { return this.statusCode }
}