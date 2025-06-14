import bcrypt from "bcrypt";
import { Router } from "express";
import { db } from "../db.js";
import jwt from "jsonwebtoken";

const adminRoute = new Router()

adminRoute.post("/register", async (req, res) => {
    
})