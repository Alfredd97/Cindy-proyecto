import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TrabajadorActividadService } from '../services/trabajador-actividad.service';

@Controller('trabajador_actividad')
export class TrabajadorActividadController {

  constructor(
    private trabajadorActividadService: TrabajadorActividadService
  ) {}

  @Get('mostrar')
  findAll() {
    return this.trabajadorActividadService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.trabajadorActividadService.findOne(id);
  }

  @Post('crear')
  create(@Body() body: any) {
    return this.trabajadorActividadService.create(body);
  }

  @Put('editar/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.trabajadorActividadService.update(id, body);
  }

  @Delete('eliminar/:id')
  delete(@Param('id') id: number) {
    return this.trabajadorActividadService.delete(id);
  }

}
