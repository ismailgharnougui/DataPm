import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite-dialog',
  templateUrl: './invite-dialog.component.html',
  styleUrls: ['./invite-dialog.component.css']
})
export class InviteDialogComponent{

  inputValue: string = '';
  selected = 1;
  formInviteEmail!: FormGroup
  formLink!:FormGroup
  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.formInviteEmail = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      selected: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
    this.formLink = this.fb.group({
      selected: ['', [Validators.required]],

    })
    

  }

  onSubmitFormInviteEmail(){
    console.log(this.formLink.value)
    

  }
  onSubmitFormLink(){
    console.log(this.formLink.value)
  }

}
