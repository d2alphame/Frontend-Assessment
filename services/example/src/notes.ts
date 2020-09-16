import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();

router.post("/create", async (req, res) => {
	const prisma: PrismaClient = req.app.locals.prisma;
	const { description, title } = req.body;
	const result = await prisma.notes.create({
		data: { description, title },
	});
	res.status(200).json(result);
});

router.get("/", async (req, res) => {
	const prisma: PrismaClient = req.app.locals.prisma;
	const result = await prisma.notes.findMany();
	res.json(result);
});

router.put("/:noteId", async (req, res) => {
	const prisma: PrismaClient = req.app.locals.prisma;
	const result = await prisma.notes.update(
		{
			where: { id: parseInt(req.params.noteId, 10) },
			data: { title: req.body.title, description: req.body.description }
		}
	);
	res.json(result);
});

export default router;
