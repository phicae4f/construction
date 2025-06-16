import 'dotenv/config';
import bcrypt from "bcrypt";
import { Router } from "express";
import { db } from "../db.js";
import jwt from "jsonwebtoken";
import { authenticateAdmin } from '../middleware/auth.js';

export const adminRouter = new Router()
const JWT_SECRET = process.env.JWT_SECRET

// const createAdmin = async () => {
//   const login = "admin@gmail.com";
//   const password = "12345";
//   const hashedPassword = await bcrypt.hash(password, 10);

//   await db.execute(
//     "INSERT INTO admins (login, password) VALUES (?, ?)",
//     [login, hashedPassword]
//   );

//   console.log("Админ создан!");
// };

// createAdmin()


adminRouter.post("/login", async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ error: "Логин и пароль обязательны" });
  }

  try {
    const [admins] = await db.execute(
      "SELECT * FROM admins WHERE login = ? LIMIT 1",
      [login]
    );

    if (admins.length === 0) {
      return res.status(401).json({ error: "Неверный логин или пароль" });
    }

    const admin = admins[0];

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Неверный логин или пароль" });
    }

    const token = jwt.sign(
      { id: admin.id, login: admin.login },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({ token });

  } catch (error) {
    console.error("Ошибка входа:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

adminRouter.get("/protected", authenticateAdmin, (req, res) => {
  res.json({ 
    message: "Доступ разрешен!",
    admin: req.admin 
  });
});