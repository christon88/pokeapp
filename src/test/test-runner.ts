import { readdirSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const testFilesDir = "./src";

const testFiles = readdirSync(testFilesDir, {
  encoding: null,
  recursive: true,
}).filter((file) => file.endsWith(".test.ts"));

testFiles.forEach((testFile) => {
  const filePath = join(testFilesDir, testFile);
  execSync(`ts-node ${filePath}`, { stdio: "inherit" });
});
