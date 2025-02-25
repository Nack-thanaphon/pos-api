import dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc'; // import UTC plugin
import * as timezone from 'dayjs/plugin/timezone';

async function bootstrap() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('Asia/Bangkok');
}

bootstrap();
