import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuario')
export class UsuarioController {

  constructor(
    private usuarioService: UsuarioService
  ) {}

  @Get('mostrar')
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.usuarioService.findOne(id);
  }

  @Post('crear')
  create(@Body() body: any) {
    return this.usuarioService.create(body);
  }

  @Put('editar/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.usuarioService.update(id, body);
  }

  @Delete('eliminar/:id')
  delete(@Param('id') id: number) {
    return this.usuarioService.delete(id);
  }

}
