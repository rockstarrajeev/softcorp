import { PrismaClient } from '@/generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import Database from 'better-sqlite3';
import path from 'path';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function createPrismaClient() {
    const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
    
    // Optimize SQLite for high-throughput production concurrency
    try {
        const rawDb = new Database(dbPath);
        rawDb.pragma('journal_mode = WAL');
        rawDb.pragma('synchronous = NORMAL');
        rawDb.pragma('cache_size = -64000'); // 64MB in-memory cache
        rawDb.pragma('busy_timeout = 5000'); // 5s timeout on contention
        rawDb.close();
    } catch {
        // Continue if database file is not yet created
    }

    const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
    return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
