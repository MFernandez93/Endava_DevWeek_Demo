import { Router, Request, Response } from 'express';
import { faker } from '@faker-js/faker';

const router: Router = Router();

router.get('/', (_req: Request, res: Response): void => {
	res.status(200).send({ message: faker.hacker.phrase() });
});

export default router;
