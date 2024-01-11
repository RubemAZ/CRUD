import express from "express"
import {getUsers} from "../controllers/get-user"

const router = express.router()

router.get("/", getUsers)

export default router