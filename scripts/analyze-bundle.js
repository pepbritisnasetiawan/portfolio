const fs = require('fs');
const path = require('path');
const madge = require('madge');
const chalk = require('chalk');

async function analyzeBundle() {
  console.log(chalk.blue('Analyzing bundle dependencies...'));
  
  try {
    const result = await madge('./src/index.js', {
      baseDir: './',
      excludeRegExp: [/node_modules/],
      fileExtensions: ['js', 'jsx']
    });

    const circularDeps = result.circular();
    if (circularDeps.length) {
      console.log(chalk.red('Circular dependencies found:'));
      circularDeps.forEach(path => {
        console.log(chalk.yellow('  ' + path.join(' -> ')));
      });
    } else {
      console.log(chalk.green('No circular dependencies found.'));
    }

    const orphans = result.orphans();
    if (orphans.length) {
      console.log(chalk.red('Orphaned files (not imported anywhere):'));
      orphans.forEach(file => {
        console.log(chalk.yellow('  ' + file));
      });
    } else {
      console.log(chalk.green('No orphaned files found.'));
    }

    // Generate dependency graph visualization
    await result.image('./dependency-graph.svg');
    console.log(chalk.green('Dependency graph generated: dependency-graph.svg'));
    
  } catch (error) {
    console.error(chalk.red('Error analyzing bundle:'), error);
  }
}

analyzeBundle(); 