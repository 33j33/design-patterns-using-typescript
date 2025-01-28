import { HttpRequest, HttpResponse, MiddlewareHandler } from "./types.ts";

// Concrete Handlers

export class AuthMiddleware implements MiddlewareHandler {

    process(req: HttpRequest, res: HttpResponse, next: () => void): void {
        const apiKey = req.headers["X-API-KEY"] || req.headers["X-API-KEY".toLocaleLowerCase()]

        // mocking authentication
        if (apiKey != "SECRET_KEY_231") {
            res.status = 401,
            res.body = "Unauthorised: Invalid API Key"
            return 
        }

        console.log("Authentication Passed")
        next() // onto next middleware in the chain
    }
}

export class RateLimitMiddleware implements MiddlewareHandler {
    private requestCountPerIP: Map<string, number>
    private MAX_REQUESTS = 5
    constructor(){
        this.requestCountPerIP = new Map()
    }
    process(req: HttpRequest, res: HttpResponse, next: () => void): void {
        const requestsCount = (this.requestCountPerIP.get(req.ip) || 0) + 1
        if (requestsCount >= this.MAX_REQUESTS) {
            res.status = 429,
            res.body = "Too Many Requests"
            return 
        }
        this.requestCountPerIP.set(req.ip, requestsCount)
        console.log(`Rate limit: ${requestsCount}/${this.MAX_REQUESTS}`);
        next()
    }
}

export class LoggerMiddlerware implements MiddlewareHandler {
    process(req: HttpRequest, res: HttpResponse, next: () => void): void {
        console.log(`Request | ${req.method} | ${req.url} | ${req.ip}`)
        next()
        console.log(`Response | ${res.status}`);
    }
}