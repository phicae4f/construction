import { Router } from "express";
import { db } from "../db.js";

export const userRouter = new Router()

userRouter.post("/feedback", async (req, res) => {
  try {
    const { name, email, phone, project_type, message } = req.body;
    
    if (!name || !email || !phone || !project_type || !message) {
      return res.status(400).json({ error: "Все поля обязательны" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Некорректный email" });
    }

    const phoneRegex = /\d{5,}/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ error: "Некорректный телефон" });
    }

    const [result] = await db.execute(
      `INSERT INTO feedback (name, email, phone, project_type, message)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone, project_type, message]
    );

    res.status(201).json({ 
      message: "Заявка успешно отправлена!",
      id: result.insertId 
    });
  } catch (error) {
    console.error("Ошибка при сохранении заявки:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});