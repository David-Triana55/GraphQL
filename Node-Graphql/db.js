import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://davidtriana796:wf9ApUnWp414bxyW@graphql.96g4a.mongodb.net/?retryWrites=true&w=majority&appName=GraphQL';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database connected");
}).catch((error) => {
  console.error("Error connecting to database: ", error.message);
});