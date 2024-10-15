import { PrismaClient } from "@prisma/client";
import { withPulse } from "@prisma/extension-pulse/node";

export const prisma = new PrismaClient().$extends(withPulse({
    apiKey: process.env.PULSE_API_KEY!,
}));
