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
