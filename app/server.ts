import { Request, Response } from 'express';

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || (3000 as const);

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
