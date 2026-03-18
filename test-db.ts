import { prisma } from "./src/lib/db";

async function main() {
    try {
        const user = await prisma.user.findFirst();
        console.log("Success:", user);
    } catch (e) {
        console.error("DB Error:", e);
    }
}
main();
