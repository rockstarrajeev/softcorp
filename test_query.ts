import { prisma } from './src/lib/db';
async function test() {
  try {
    const user = await prisma.user.findFirst();
    console.log("SUCCESS:", user);
  } catch(e) {
    console.error("ERROR:", e);
  }
}
test();
