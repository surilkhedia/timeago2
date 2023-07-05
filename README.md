# TimeAgo2

Display dates in a twitter like timeago date format (e.g. '9s' or 'Dec 29')

## Formats

- Display seconds ago as 0s to 59s
- Display minutes ago as 1m to 59m
- Display hours ago as 1h to 23h
- Display days ago as 1d to 6d
- Display any date in current year as e.g. Feb 23
- Display any date in previous year and beyond as e.g. Jun 14 2020

## Installation

```bash
npm install timeago2 --save
```

## Usage

Require timeago2

```bash
const timeago2 = require('timeago2')
```

Dates earlier than current year

```bash
timeago2('03-24-2022')
// => Mar 24 2022
```

Dates from current year

```bash
timeago2('03-31-2022')
// => Mar 31
```

Recent date or time 

```bash
timeago2(new Date.now())
// => 0s
```