import { loginUser, signupUser } from "../controllers/userControllers.js";
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/verify', verifyToken, (req, res) => res.status(200).json({decode: req.decode})); 

export default router;