import { Logger } from "./logger.context.ts";
import { consoleLogger, fileLogger } from "./loggers.strategies.ts";

// The client code picks one or more concrete strategies and passes them to the context.
// The client should be aware of the differences between strategies in order to make the right choice.
const logger = new Logger().use(new consoleLogger());

logger.log("Heelo wooorld", { randon: true }); // [INFO] Heelo wooorld {"randon":true}

logger.use(new fileLogger("log.txt"));

logger.log("John Wick", { isAuthenticated: false });
// [INFO] John Wick {"isAuthenticated":false}
// log: [INFO] John Wick | data: {"isAuthenticated":false} written to file log.txt
