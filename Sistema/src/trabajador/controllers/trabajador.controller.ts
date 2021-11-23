import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TrabajadorService } from '../services/trabajador.service';

@Controller('trabajador')
export class TrabajadorController {

  constructor(
    private trabajadorService: TrabajadorService
  ) {}

  @Get('mostrar')
  findAll() {
    return this.trabajadorService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.trabajadorService.findOne(id);
  }

  @Post('crear')
  create(@Body() body: any) {
    return this.trabajadorService.create(body);
  }

  @Put('editar/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.trabajadorService.update(id, body);
  }

  @Delete('eliminar/:id')
  delete(@Param('id') id: number) {
    return this.trabajadorService.delete(id);
  }

}
