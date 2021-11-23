import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TipoActividadService } from '../services/tipo-actividad.service';

@Controller('tipo_actividad')
export class TipoActividadController {

  constructor(
    private tipoActividadService: TipoActividadService
  ) {}

  @Get('mostrar')
  findAll() {
    return this.tipoActividadService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.tipoActividadService.findOne(id);
  }

  @Post('crear')
  create(@Body() body: any) {
    return this.tipoActividadService.create(body);
  }

  @Put('editar/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.tipoActividadService.update(id, body);
  }

  @Delete('eliminar/:id')
  delete(@Param('id') id: number) {
    return this.tipoActividadService.delete(id);
  }

}
