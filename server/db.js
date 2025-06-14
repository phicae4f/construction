import 'dotenv/config';
import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
});


export async function createTables() {
    try {
         await db.execute(`
            CREATE TABLE IF NOT EXISTS admins (
                id INT AUTO_INCREMENT PRIMARY KEY,
                login VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await db.execute(`
            CREATE TABLE IF NOT EXISTS feedback (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                project_type VARCHAR(50) NOT NULL,  
                message TEXT NOT NULL,             
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status ENUM('new', 'processed') DEFAULT 'new'  
            )
        `);


        console.log("Все таблицы успешно созданы/проверены");
    } catch (error) {
        console.error("Ошибка при создании таблиц:", error);
    }
}