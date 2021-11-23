import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AcuerdoService } from '../services/acuerdo.service';

@Controller('acuerdo')
export class AcuerdoController {

  constructor(
    private acuerdoService: AcuerdoService
  ) {}

  @Get('mostrar')
  findAll() {
    return this.acuerdoService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.acuerdoService.findOne(id);
  }

  @Post('crear')
  create(@Body() body: any) {
    return this.acuerdoService.create(body);
  }

  @Put('editar/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.acuerdoService.update(id, body);
  }

  @Delete('eliminar/:id')
  delete(@Param('id') id: number) {
    return this.acuerdoService.delete(id);
  }

}
