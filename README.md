# ALOG - Simple Color Logger

A lightweight Node.js logging utility with color support, time formatting, and file logging capabilities.

## Features

- 🎨 **Color-coded logs** for different log levels
- ⏰ **Automatic timestamp** with GMT+7 timezone
- 📁 **File logging** with automatic directory creation
- 🔧 **Development mode** filtering
- 🏗️ **Singleton pattern** for consistent logging across your app

## Installation

```bash
npm install alog-xyz
```

## Quick Start

```javascript
const alog = require('alog-xyz').getInstance({
  mode: 'development',
  dirpath: __dirname,
  logName: 'MYAPP'
});

alog.info('Server started on port 3000');
alog.error('Database connection failed');
alog.warn('Deprecated API called');
alog.dev('Debug info - only shown in dev mode');
```

## API Reference

### Configuration

```javascript
const alog = require('alog-xyz').getInstance({
  mode: 'production',        // 'production' | 'development' | 'dev'
  dirpath: __dirname,        // Directory for log files
  logName: 'ALOG'           // Logger name prefix
});
```

### Log Methods

#### `alog.info(...args)`
Log info level messages (cyan color)

```javascript
alog.info('User logged in', { userId: 123 });
// ALOG-INFO - 20/01/2024 10:31:08 > User logged in { userId: 123 }
```

#### `alog.error(...args)`
Log error level messages (red color)

```javascript
alog.error('Database connection failed', error);
// ALOG-ERROR - 20/01/2024 10:31:08 > Database connection failed Error: ...
```

#### `alog.warn(...args)`
Log warning level messages (yellow color)

```javascript
alog.warn('Deprecated method called');
// ALOG-WARNING - 20/01/2024 10:31:08 > Deprecated method called
```

#### `alog.dev(...args)`
Log development messages (magenta color) - only shown in development mode

```javascript
alog.dev('Debug info', { requestId: 'abc123' });
// ALOG-DEV - 20/01/2024 10:31:08 > Debug info { requestId: 'abc123' }
```

#### `alog.write(text, filename)`
Write log to file

```javascript
alog.write('Custom log message', 'api');
// Creates: logs/api-DESKTOP-F2RK900-20-1-2024.log
```

**Parameters:**
- `text` (string): Text to write
- `filename` (string, optional): File name prefix (default: 'combined')

## Examples

### Basic Usage

```javascript
const alog = require('alog-xyz').getInstance();

alog.info('Application started');
alog.error('Something went wrong');
alog.warn('This feature is deprecated');
```

### With Custom Configuration

```javascript
const alog = require('alog-xyz').getInstance({
  mode: 'development',
  dirpath: '/var/logs/myapp',
  logName: 'MYAPP'
});

// Only dev logs will show in development mode
alog.dev('Debug information');
alog.info('User action');
```

### File Logging

```javascript
// Write custom logs to file
alog.write('User login attempt', 'auth');
alog.write('API request processed', 'api');
```

## Log File Structure

Log files are created in the `logs/` directory with the following naming pattern:
```
{filename}-{hostname}-{day}-{month}-{year}.log
```

Example: `combined-DESKTOP-F2RK900-20-1-2024.log`

## Timezone

All timestamps are formatted in GMT+7 timezone.

## License

MIT

