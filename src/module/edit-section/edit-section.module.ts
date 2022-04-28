import { Module } from '@nestjs/common';
import { EditSectionService } from './edit-section.service';
import { EditSectionController } from './edit-section.controller';

@Module({
  controllers: [EditSectionController],
  providers: [EditSectionService]
})
export class EditSectionModule {}
