import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string().min(3).label('Username'),
  password: Joi.string().min(8).label('Password')
}).and('username', 'password')