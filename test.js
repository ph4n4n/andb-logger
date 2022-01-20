const log = require('./index').getInstance();

log.error('error');

log.warning('warning');

log.info('info');

log.dev('dev');

process.env = 'production';

log.dev('production ');