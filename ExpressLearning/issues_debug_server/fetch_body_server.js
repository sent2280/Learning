import express from "express"
import bodyParser from 'body-parser';
import cors from "cors"

const app = express();
const PORT = 3000;
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add the HTTP methods you need.
  };

// Parse JSON bodies
app.use(express.json());
//app.use(bodyParser.json());
app.use(cors(corsOptions));

// Route to handle POST request
app.post('/api/payment/stripe/create-payment-intent', (req, res) => {
  console.log("Received POST request with body:", req.body);
  res.json({ message: "Received POST request", data: req.body });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
