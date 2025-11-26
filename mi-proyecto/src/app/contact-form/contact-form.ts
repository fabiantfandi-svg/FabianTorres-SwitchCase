import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  onSub(formC: any):void{
    if(formC.valid){
      console.log("El formulario es correcto y se envio")
      console.log(formC)
      formC.reset()
    }else{
      console.log("EL formulario no es valido")
    }
  }

}
