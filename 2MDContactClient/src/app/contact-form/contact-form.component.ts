import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApplicationService } from '../application.service';
import {Router} from "@angular/router"

export interface Interest {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  isLoading: boolean = false;
  
  private _areaOfInterest : string;
  public get areaOfInterest() : string {
    return this._areaOfInterest;
  }
  public set areaOfInterest(v : string) {
    this._areaOfInterest = v;
  }
  
  constructor(private formBuilder: FormBuilder, private applicationService: ApplicationService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let phoneregex: RegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g

    this.formGroup = this.formBuilder.group({
      'contactid': [0],
      'firstname': [null],     
      'lastname': [null],     
      'emailaddress': [null, [Validators.required, Validators.pattern(emailregex)]],
      'phonenumber': [null, [Validators.pattern(phoneregex)]],
      'areaofinterest': [null], 
      'message': [null, [Validators.minLength(5), Validators.maxLength(300)]]
    });
  }
  
  get firstname() {
    return this.formGroup.get('name') as FormControl
  }

  get lastname() {
    return this.formGroup.get('lastname') as FormControl
  }
  
  get number() {
    return this.formGroup.get('number') as FormControl
  }

  get areaofinterest() {
    return this.formGroup.get('areaofinterest') as FormControl
  }

  interests: Interest[] = [
    {value: 'autobodyrepairer-0', viewValue: 'Auto Body Repairer'},
    {value: 'automotiveservicetechnican-1', viewValue: 'Automotive Service Technician'},
    {value: 'cook-2', viewValue: 'Cook'},
    {value: 'plumber-3', viewValue: 'Plumber'}
  ];

  getErrorEmail() {
    return this.formGroup.get('emailaddress').hasError('required') ? 'Field is required' :
      this.formGroup.get('emailaddress').hasError('pattern') ? 'Not a valid Email Address' :
      '';
  }
  
  getErrorPhoneNumber() {
    return this.formGroup.get('phonenumber').hasError('required') ? 'Field is required' :
      this.formGroup.get('phonenumber').hasError('pattern') ? 'Not a valid Phone Number' :
      '';
  }

  onSubmit(post) {
    let json = JSON.stringify(post)
    this.isLoading = true;
    this.applicationService.CallServer({content: btoa(unescape(encodeURIComponent(json)))}).subscribe(
      res => this.router.navigate(['/thankyou']),
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );  
    this.post = post;
  }
}
