import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})




export class ContactComponent {

  serviceKey:string = 'service_7mxgh0z';
  templateKey:string = 'template_9xn2jbp';
  publickey: string = 'Aw2iDXbuWHCqZnwTW';

  message: string ='Ihre Anfrage wurde erfolgreich versandt.'
  successMap = false
  loading = false

  contactForm = new FormGroup({
    Salutation :new FormControl(),
    UserName :new FormControl(null,[Validators.required]),
    Phone :new FormControl(null,[Validators.required,Validators.pattern('[0-9]+')]),
    News :new FormControl(null,[Validators.required]),
    agree :new FormControl(null,[Validators.required]),
    Email :new FormControl(null,[Validators.required,Validators.email])
  })



  onSubmit(contactForm:FormGroup,e:Event){

  this.loading = true //loading until request is done
      e.preventDefault();
    emailjs.sendForm(this.serviceKey,this.templateKey, e.target as HTMLFormElement,this.publickey)
    .then((result: EmailJSResponseStatus) => {
      console.log(result);
      if(result.status == 200){
        this.successMap = true
        this.loading = false
        setTimeout(() => {
          this.successMap = false
        }, 1500);
      }
      contactForm.reset()
    }, (error) => {
      console.log(error.text);
      if(error){
        this.message = error.text
        this.successMap = true
      }
    });

    }


  }


