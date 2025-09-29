import app from "./app";
import "dotenv-safe/config";
const port = process.env.PORT || undefined;
app.listen(port, () => console.log(`Listening on Port : ${port}`));
