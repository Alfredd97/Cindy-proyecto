import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UebService } from '../services/ueb.service';

@Controller('ueb')
export class UebController {

  constructor(
    private uebService: UebService
  ) {}

  @Get('mostrar')
  findAll() {
    return this.uebService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.uebService.findOne(id);
  }

  @Post('crear')
  create(@Body() body: any) {
    return this.uebService.create(body);
  }

  @Put('editar/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.uebService.update(id, body);
  }

  @Delete('eliminar/:id')
  delete(@Param('id') id: number) {
    return this.uebService.delete(id);
  }

}
