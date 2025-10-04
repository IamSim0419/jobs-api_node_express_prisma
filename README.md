We’ll create a simple “Jobs API” where you can:

Create a job posting
Read all or a single job
Update a job
Delete a job

# Step 1: Setup the Project

🧰 Install Dependencies
mkdir jobs-api
cd jobs-api
npm init -y
npm install express cors dotenv prisma @prisma/client
npm install -D nodemon typescript ts-node @types/node @types/express

# What each package does:

Package Purpose
express - Core framework for building the API (routes, middleware, etc.)
cors - Allows frontend apps (like Vue or React) to call your backend
dotenv - Loads environment variables (e.g. database URL) from .env
prisma - ORM (Object Relational Mapper) to interact with PostgreSQL easily
@prisma/client - Auto-generated Prisma client to perform database queries
nodemon - Automatically restarts your server on code changes (for dev)
typescript - Type safety and better development experience
ts-node - Allows running TypeScript directly without compiling
@types/ packages - TypeScript definitions for Express and Node

# Step 2: Setup TypeScript

Create tsconfig.json:

# Step 3: Setup Prisma and Database

Initialize Prisma
npx prisma init

This creates:

prisma/schema.prisma → defines your database models

.env → holds your database URL

4️⃣ Run the migration (creates the table in DB)

npx prisma migrate dev --name init

# 🧩 Step 4: Create Express Server

Folder structure
jobs-api/
├── prisma/
│ └── schema.prisma
├── src/
│ ├── server.ts
│ ├── routes/
│ │ └── jobs.ts
│ └── prisma.ts
├── .env
├── package.json
├── tsconfig.json

#🧩 Step 5: Add Scripts

In your package.json:

"scripts": {
"dev": "nodemon --exec ts-node src/server.ts",
"build": "tsc",
"start": "node dist/server.js"
}

#🧪 Step 6: Test with API Client (e.g., Postman or Thunder Client)
Method Endpoint Description
POST /api/jobs Create a job
GET /api/jobs Get all jobs
GET /api/jobs/:id Get one job
PUT /api/jobs/:id Update job
DELETE /api/jobs/:id Delete job

# Update prisma schema model

npx prisma migrate dev --name add_image_and_salary
