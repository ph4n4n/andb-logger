I. Description

This is a simple logger by color and time with 5 basic method:


1. Basic method:
    info
    error
    warning
    dev
    write

2. Note:
by using above function to start to use `alog-xyz` logName is optional with defaul value is `ALOG`
``` js
    getInstance(__dirpath, logName)
```

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
    const alog = require('alog-xyz').getInstance(__dirpath, logName);

    alog.error('error');
    // ALOG-ERROR - 20/01/2022 10:31:08 > error

    alog.warning('warning');
    // ALOG-WARNING - 20/01/2022 10:31:08 > warning

    alog.info('info');
    // ALOG-INFO - 20/01/2022 10:31:08 > info

    alog.dev('dev');
    // ALOG-DEV - 20/01/2022 10:31:08 > dev

    alog.write('log content');
    // got log file at `__dirpath/logs/combined-DESKTOP-F2RK900-20-1-2022.log`


```