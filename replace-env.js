var fs = require("fs");
var path = require("path");

var envFilePath = path.resolve(
  __dirname,
  "src/environments/environment.prod.ts"
);
var apiKey = process.env.THE_MOVIE_DB_API;

if (apiKey) {
  var envFileContent = fs.readFileSync(envFilePath, "utf8");
  envFileContent = envFileContent.replace("YOUR_API_KEY_PLACEHOLDER", apiKey);
  fs.writeFileSync(envFilePath, envFileContent, "utf8");
  console.log("API key replaced successfully.");
} else {
  console.error("API key not found in environment variables.");
  process.exit(1);
}
