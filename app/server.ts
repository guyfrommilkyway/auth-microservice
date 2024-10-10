import type { Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || (3000 as const);

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
