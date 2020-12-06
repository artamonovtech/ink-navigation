# ink-navigation

A simple [React](https://reactjs.org/) based router for [ink](https://github.com/vadimdemedes/ink) CLI commands.

# Getting started

Install the package:

```sh
npm install ink-navigation
```

or

```sh
yarn add ink-navigation
```

Configure your commands.

```tsx
#!/usr/bin/env node
import React from 'react';
import { Text, render } from 'ink';
import { CommandRouter, Command, NoMatch, useArgs } from 'ink-navigation';

const Help = () => {
  return <Text>Add a description of the help...</Text>;
};

const Version = () => {
  return <Text>1.0.0</Text>;
};

const ParsedArgs = () => {
  const args = useArgs();

  return <Text>{JSON.stringify(args, null, 2)}</Text>;
};

const App = () => {
  return (
    <CommandRouter args={process.argv}>
      <Command name="help">
        <Help />
      </Command>
      <Command name="version">
        <Version />
      </Command>
      <Command name="parsed-args">
        <ParsedArgs />
      </Command>
      <NoMatch>
        <Help />
      </NoMatch>
    </CommandRouter>
  );
};

render(<App />);
```

You can then use the tool like so:

```sh
> tool help
> Add a description of the help...
>
> tool version
> 1.0.0
>
> tool parsed-args -hello world -foo=bar --one=two --three four final-arg
> {
>   "_": ["final-arg"],
>   "hello":"world",
>   "foo": "bar",
>   "one":"two",
>   "three":"four"
> }
>
> tool this-does-not-exist
> Add a description of the help...
```

## Argument parsing

Arguments are parsed using [minimist](https://www.npmjs.com/package/minimist).
