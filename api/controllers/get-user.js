import {db} from "../db-config"

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users"

    db.query(q, (err, data) => {
        if (err) return res.json(res)

        return res.status(200).json(data)
    })
}