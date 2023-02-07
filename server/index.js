import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import uploadRoutes from "./routes/uploadRoutes.js"

dotenv.config();

const app = express()

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/upload', uploadRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
})

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`server is on at port ${port}`);
  })
}

startServer(3000);