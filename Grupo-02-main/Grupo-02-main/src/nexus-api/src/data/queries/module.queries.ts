import { Sql } from "@prisma/client/runtime/library";
import { ModuleDto } from "src/business/dtos/module.dto";
import { Prisma } from "@prisma/client";
import * as uuid from 'uuid';

export const moduleQueries = {
    create: (moduleDto: ModuleDto): Sql => Prisma.sql`
        INSERT INTO "Module" ("id", "courseCode", "moduleName", "beginData", "isActive", "createdAt", "updatedAt", "status")
        VALUES (
            ${uuid.v4()},
            ${moduleDto.courseCode},
            ${moduleDto.moduleName},
            ${new Date()},
            ${moduleDto.isActive},
            ${new Date()},
            ${new Date()},
            ${moduleDto.status}
        )
        RETURNING *;
    `,
}
