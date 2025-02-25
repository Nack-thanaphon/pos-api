"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
async function bootstrap() {
    dayjs_1.default.extend(utc);
    dayjs_1.default.extend(timezone);
    dayjs_1.default.tz.setDefault('Asia/Bangkok');
}
bootstrap();
//# sourceMappingURL=consumer.js.map