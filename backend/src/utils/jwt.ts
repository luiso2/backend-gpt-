import jwt from 'jsonwebtoken';

export const generateToken = (payload: {
  id: string;
  email: string;
  role: string;
}): string => {
  const jwtSecret: string = process.env.JWT_SECRET || 'your-secret-key';
  const jwtExpire: string = process.env.JWT_EXPIRE || '7d';

  return jwt.sign(payload, jwtSecret as string, {
    expiresIn: jwtExpire,
  });
};
