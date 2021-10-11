const fs = require("fs")

fs.writeFileSync("log.txt", process.argv[1], function (err) {
  if (err) {
      return console.log(err);
  }
  
  console.log("Done!");
});

fs.readFile("log.txt", "utf8", function (error, log) {
    if (error) {
        return consol.log(error); 
    }

    console.log(log);
});
