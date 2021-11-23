import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InformeResumenService } from '../services/informe-resumen.service';

@Controller('informe_resumen')
export class InformeResumenController {

  constructor(
    private informeResumenService: InformeResumenService
  ) {}

  @Get('mostrar')
  findAll() {
    return this.informeResumenService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.informeResumenService.findOne(id);
  }

  @Post('crear')
  create(@Body() body: any) {
    return this.informeResumenService.create(body);
  }

  @Put('editar/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.informeResumenService.update(id, body);
  }

  @Delete('eliminar/:id')
  delete(@Param('id') id: number) {
    return this.informeResumenService.delete(id);
  }

}
