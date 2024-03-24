// lib/prisma.ts

import { Pool } from "pg";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
console.log("connectionString", connectionString);
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;
