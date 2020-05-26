import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Hiago', email: 'hiago@teste.com' }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail(
      { name: 'Hiago Prates', email: 'hiago@teste.com' },
      { subject: 'Bem vindo ao sistema', body: 'Seja bem-vindo' }
    );

    return res.send();
  }
 };