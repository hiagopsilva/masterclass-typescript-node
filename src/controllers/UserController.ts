import { Request, Response} from 'express';

const users = [
  { name: 'Hiago', email: 'hiago@teste.com' }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
 };