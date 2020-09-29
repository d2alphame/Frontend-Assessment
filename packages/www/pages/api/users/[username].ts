import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
	const prisma = new PrismaClient();
	const notes = await prisma.notes.findMany({
		where: {
			owner: req.query.username
		}
	})
	res.statusCode = 200
	res.json(notes)
	
}
