import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';


const app = express();

//initializing cors 
app.use(cors({
  origin: "http://localhost:5173", // specify the domain you want to allow to access your API
  credentials: true, // enable sending cookies
}));


// parse request body as JSON and limit the size to 16KB
app.use(express.json({limit: "16kb"}));

// manages url parameters like "how to learn javascript" to "how%20to%20learn%20javascript"
app.use(express.urlencoded({extended: true}));

// serve static files from the "public" folder
app.use(express.static( "public"));


app.use(cookieParser());


//Routes import
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";


app.use("/product", productRouter);
app.use("/api/users", userRouter);



export { app }