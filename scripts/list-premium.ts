import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(process.cwd(), ".env.local") });

import { prisma } from "../lib/prisma";

async function main() {
  const dishes = await prisma.dishTemplate.findMany({
    where: { category: "PREMIUM" },
    select: { id: true, name: true },
  });
  console.log(JSON.stringify(dishes, null, 2));
  await prisma.$disconnect();
}

main();
