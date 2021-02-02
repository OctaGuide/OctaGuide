let express = require("express");
let app = express();

app.use("/", express.static("./public"));

let server = app.listen(3000, () => {
	console.log(`🏃‍♀️ Server is listening on Port 3000`);
});
