import { HttpRequest, HttpResponse, MiddlewareHandler } from "./types.ts";

export class Server {
    private middlewares: MiddlewareHandler[]
    constructor(){
        this.middlewares = []
    }
    use(middleware: MiddlewareHandler){
        this.middlewares.push(middleware)
    }
    handleRequest(req: HttpRequest){
        const res: HttpResponse = { status: 200, body: 'OK' };
    
        // Chain middlewares using recursive closure
        const runMiddleware = (index: number) => {
            if (index >= this.middlewares.length) return;
            
            const middleware = this.middlewares[index];
            middleware.process(req, res, () => runMiddleware(index + 1));
        };

        runMiddleware(0);
        return res;
    }
}