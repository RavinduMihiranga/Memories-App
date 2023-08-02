import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// initializing app for any express application
const app = express();

//  to handle request seting up a image upload size limit
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://ravindumihiranga788:QiD09c9XrbJeNdgm@cluster0.vota6mf.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


