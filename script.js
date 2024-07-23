import express, { response } from "express";
import dotenv from 'dotenv';
import cors from "cors";

const app =  express();
dotenv.config();
app.use(cors()); // tells our server to allow cross origin resource sharing

const images = [
    "https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/18/08/16/cat-8769861_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/03/08/09/47/ai-generated-8620359_1280.png",
    "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_1280.jpg",
];

app.get("/", function (request, response) {
    response.json("Meow");
});

app.get("/images", function (request, response) {
    response.json(images);
});

app.listen(8080, function () {
    console.log("Listening to port 8080");
});