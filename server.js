import express from "express";
import pool from "./db.js";
const app = express();

app.use(express.json());
const PORT = process.env.PORT;

app.get("/api/konyvek", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM termekek");
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ hiba: "Szerver hiba." });
    }
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
