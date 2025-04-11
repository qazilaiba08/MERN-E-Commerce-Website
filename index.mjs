import express from 'express';
const app = express();
import connectDB from './db/db.js';

import cors from "cors";
const PORT = process.env.PORT || 5000;
// import path from 'path';
import userRoutes from './routes/userRoutes.js';

// import cartRoutes from "./routes/cartRoutes.js"
// import productRoutes from "./routes/productRoutes.js"


app.use(
	cors({
		origin: [
			'http://localhost:5173',
			'http://localhost:5174'
			
		],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);
// const __dirname = path.resolve();

// // Serve static frontend files
// app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());

connectDB()

app.use('/api/auth', userRoutes);
app.get('/', (req, res) => {
	res.send('Welcome to the API');
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})