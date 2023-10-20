#!/usr/bin/env node
import ora from "ora";
import args from "args";
import chalk from "chalk";
import { fakeIt, transform } from "../src/index.mjs";

try {
  console.log(
    chalk.magenta(`
=========================
 A-Transform-Transformer
=========================
             __
 _(\\    |@@|
(__/\\__ \\--/ __
   \\___|----|  |   __
       \\ }{ /\\ )_ / _\\
       /\\__/\\ \\__O (__
      (--/\\--)    \\__/
      _)(  )(_
     \`---''---\`
    `)
  );

  args.option("b", "Add transform booleanAttribute to all boolean inputs");

  const flags = args.parse(process.argv);

  if (Object.keys(flags).length === 0) {
    console.log(chalk.red("ATT: No flags provided - there is nothing to do!"));
    console.log(
      chalk.blue(
        "ATT: Please provide a flag. To see the available flags run: a-transform-transformer --help"
      )
    );
    process.exit(1);
  }

  const { b: booleanAttributes } = flags;

  const spinner = ora(
    `Transforming ${booleanAttributes && "booleanAttributes"}`
  ).start();
  transform(booleanAttributes);
  spinner.succeed(`Transformed ${booleanAttributes && "booleanAttributes"}`);
} catch (e) {
  console.log(chalk.red("ATT: Something went wrong!", e));
  process.exit(1);
}
