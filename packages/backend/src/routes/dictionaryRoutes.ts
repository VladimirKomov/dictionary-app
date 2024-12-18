import express, {Request, Response} from "express";
import axios, {Axios, AxiosResponse} from 'axios';
import {mapResApiToDto} from "@backend/mappers/mapper";

const router = express.Router();
const pathApi: string = "https://api.dictionaryapi.dev/api/v2/entries/en";

router.get('/:word', async (req: Request, res: Response): Promise<void> => {
    const word = req.params.word;

    try {
        const apiRes = await axios.get(`${pathApi}/${word}`);
        const data = apiRes.data;
        res.json(mapResApiToDto(data));
    } catch (err) {
        console.error(err);
        res.status(404).json({ error: 'Word not found' });
    }
});

export default router;

