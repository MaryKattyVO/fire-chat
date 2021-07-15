import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {
  mensaje: string = "";

  constructor( public _cs: ChatService) { 
    this._cs.cargarMensajes()
        .subscribe((mensaje: any[]) => {
          console.log
          (mensaje);
        })
  }

  ngOnInit(): void {
  }

  enviar_mensaje() {
    console.log(this.mensaje);
  }

}
