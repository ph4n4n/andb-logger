I. Description

This is a simple logger by color and time with 5 basic method:

    info
    error
    warning
    dev
    write

II. Install

``` bash
    npm i alog-xyz
```

III. Uninstall

``` bash
    npm uninstall alog-xyz
```

IV. Using

```js
    const log = require('./index').getInstance();

    log.error('error');
    // ALOG-ERROR - 20/01/2022 10:31:08 > error

    log.warning('warning');
    // ALOG-WARNING - 20/01/2022 10:31:08 > warning

    log.info('info');
    // ALOG-INFO - 20/01/2022 10:31:08 > info

    log.dev('dev');
    // ALOG-DEV - 20/01/2022 10:31:08 > dev

```