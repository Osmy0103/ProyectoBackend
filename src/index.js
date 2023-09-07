import app from "./app.js";
import {connectDB} from "./db.js";



connectDB();
app.listen(4040);
console.log("servidor en el puerto", 4040);