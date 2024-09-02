import express from 'express';
import cors from 'cors';
import formSubmitHandler from './api/form-submit.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'https://bazamarket.com.ua'
}));
// Route for receiving data from the form
app.post('/api/form-submit', formSubmitHandler);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});