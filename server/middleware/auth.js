import 'dotenv/config';
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET

export const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ error: "Токен отсутствует" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Недействительный токен" });
    }
    req.admin = decoded; 
    next();
  });
};
