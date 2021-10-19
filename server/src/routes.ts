import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { ensureAutheticated } from './middleware/ensureAutheticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post(
  '/messages',
  ensureAutheticated,
  new CreateMessageController().handle
);

router.get('/messages/last3', new GetLast3MessagesController().handle);

export { router };
