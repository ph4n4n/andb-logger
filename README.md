I. Description
    This is a simple logger by color and time with 5 basic method:
    > `info`
    > `error`
    > `warning`
    > `dev`
    > `write`

II. Install
``` bash
    npm i alog-xyz
```

II. Using

```js
    const log = require('./index').getInstance();

    log.error('error');

    log.warning('warning');

    log.info('info');

    log.dev('dev');

    process.env = 'production';

    log.dev('production ');
```