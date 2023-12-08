import { Router } from "express";
import { Register, Login, GetCurentUser } from "../Controllers/Auth.controllers.js";

const authRoutes = Router();

authRoutes.post('/register', Register);
authRoutes.post('/login', Login);
authRoutes.get('/get-current-user',GetCurentUser);


export default authRoutes;