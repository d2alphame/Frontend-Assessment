import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();

router.post("/create", async (req, res) => {
	const prisma: PrismaClient = req.app.locals.prisma;
	const username = req.body.username;
	const result = await prisma.users.create({
		data: { username },
	});
	res.status(200).json(result);
});

export default router;
