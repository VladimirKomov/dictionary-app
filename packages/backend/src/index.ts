import express from 'express';
import dictionaryRoutes from "@backend/routes/dictionaryRoutes";
import cors from "cors";


const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Backend is working!');
})

app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
);

app.use(cors());

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());
app.use('/api/dictionary',  dictionaryRoutes);