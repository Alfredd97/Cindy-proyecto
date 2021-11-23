import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DeficienciaService } from '../services/deficiencia.service';

@Controller('deficiencia')
export class DeficienciaController {

  constructor(
    private deficienciaService: DeficienciaService
  ) {}

  @Get('mostrar')
  findAll() {
    return this.deficienciaService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.deficienciaService.findOne(id);
  }

  @Post('crear')
  create(@Body() body: any) {
    return this.deficienciaService.create(body);
  }

  @Put('editar/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.deficienciaService.update(id, body);
  }

  @Delete('eliminar/:id')
  delete(@Param('id') id: number) {
    return this.deficienciaService.delete(id);
  }

}
