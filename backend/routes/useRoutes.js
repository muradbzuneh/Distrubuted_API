import { createUser, getUsers } from "../controller/userConroller.js";
import express from "express";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getUsers);

export default router;