import { Injectable } from '@nestjs/common';
import { ModuleDto } from 'src/business/dtos/module.dto';
import { ModuleEntity } from 'src/business/entities/module.entity';
import { IModuleService } from 'src/business/services/module-impl.service';
import { PrismaService } from '../prisma.service';
import { moduleQueries } from '../queries/module.queries';

@Injectable()
export class ModuleService implements IModuleService {
  
constructor(private readonly prisma: PrismaService){}

   public async createModule(moduleDto: ModuleDto): Promise<ModuleEntity> {
    return await this.prisma.$queryRaw(moduleQueries.create(moduleDto));
    };

}
