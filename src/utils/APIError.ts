export default class APIError extends Error {
    constructor(
        public readonly statusCode: number,
        public readonly message: string
    ) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}