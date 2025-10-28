import jwt from 'jsonwebtoken';

export const generateToken = (payload: {
  id: string;
  email: string;
  role: string;
}): string => {
  const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';
  const jwtExpire = process.env.JWT_EXPIRE || '7d';

  return jwt.sign(payload, jwtSecret, {
    expiresIn: jwtExpire,
  });
};
