#! /usr/bin/env node

console.log("Hello, Ermintrude, you natty little thing!");
console.log();

const args = process.argv.slice(2);
const projectName = args[0] || "ermintrude-project";

// if (args.length < 1) {
//   console.error("Error: Please enter a project name: npx ermintrude <project-name>");
//   process.exit(1); //an error occurred
// }

const build = async (projectName) => {
  const { Plop, run } = await import("plop");
  const path = await import("path");

  console.log(`Creating project "${projectName}"...`);
  console.log(Plop.Liftoff);

  Plop(
    {
      cwd: `./${projectName}`,
      configPath: path.join(__dirname, "plopfile.js"),
      //   require: argv.require,
      //   completion: argv.completion,
    }
    //   run
  );

  process.exit(0); //no errors occurred
};

build(projectName);
