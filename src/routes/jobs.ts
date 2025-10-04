import { Router } from "express";
import prisma from "../prisma";

const router = Router();

// ✅ Create Job
router.post("/", async (req, res) => {
  const { title, company, description, salary, image } = req.body;
  try {
    const job = await prisma.job.create({
      data: { title, company, description, salary, image },
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: "Failed to create job" });
  }
});

// ✅ Get All Jobs
router.get("/", async (req, res) => {
  const jobs = await prisma.job.findMany({ orderBy: { createdAt: "desc" } });
  res.json(jobs);
});

// ✅ Get One Job
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const job = await prisma.job.findUnique({ where: { id: Number(id) } });
  job ? res.json(job) : res.status(404).json({ error: "Job not found" });
});

// ✅ Update Job
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, company, description, salary, image } = req.body;
  try {
    const updatedJob = await prisma.job.update({
      where: { id: Number(id) },
      data: { title, company, description, salary, image },
    });
    res.json(updatedJob);
  } catch {
    res.status(404).json({ error: "Job not found" });
  }
});

// ✅ Delete Job
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.job.delete({ where: { id: Number(id) } });
    res.json({ message: "Job deleted" });
  } catch {
    res.status(404).json({ error: "Job not found" });
  }
});

export default router;
