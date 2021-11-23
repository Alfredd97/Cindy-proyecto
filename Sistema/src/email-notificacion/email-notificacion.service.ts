import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

// 1- install nodemailer, package if not installed (type in cmd) : npm install nodemailer
//
// 2- go to https://myaccount.google.com/lesssecureapps and turn on Allow less secure apps.

@Injectable()
export class EmailNotificacionService {
  async enviarNotificacion(objeto: any, crudOperacion: string) {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'notificaciones.actividades@gmail.com',
        pass: 'tesis_tony123',
      },
    });
    
    var subjet = crudOperacion == 'CREAR' ? 'Nueva Actividad' : 'Actualización de Actividad';
    subjet += ' (Fecha: ' + objeto.fecha_hora + ')';
    
    var info = crudOperacion == 'CREAR' ? 'Tiene una nueva actividad el día: ' : 'Se actualizó la actividad para el día: ';
    info += objeto.fecha_hora;

    const mailOptions = {
      from: 'any@any.com', // sender address
      to: objeto.correo, // list of receivers
      subject: subjet, // Subject line
      html: '<h1>NOTIFICACION ACTIVIDAD</h1><h4>'+info+'</h4>',
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  }
}
