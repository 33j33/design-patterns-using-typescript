import { Logger } from "./logger.context.ts";
import { consoleLogger, fileLogger } from "./loggers.strategies.ts";

const logger = new Logger().use(new consoleLogger());

logger.log("Heelo wooorld", { randon: true }); // [INFO] Heelo wooorld {"randon":true}

logger.use(new fileLogger("log.txt"));

logger.log("John Wick", { isAuthenticated: false });
// [INFO] John Wick {"isAuthenticated":false}
// log: [INFO] John Wick | data: {"isAuthenticated":false} written to file log.txt
