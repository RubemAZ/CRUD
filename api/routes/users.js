import {getUsers} from "../controllers/get-user"
import express from "express"

const router = express.router()

router.get("/", getUsers)

export default router