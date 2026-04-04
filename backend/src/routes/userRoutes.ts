import { Router } from "express";
import { syncUser } from "../controllers/userController";

const router = Router()

router.post("/async", syncUser)

export default router