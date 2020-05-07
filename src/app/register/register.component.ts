import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ThemeData } from '../data/themeData';

interface Role
{
  id:number;
  value:string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  startDate:Date;
  selectedCountry:string;
  controlsThemeColor:string;

  registrationForm= new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    country:new FormControl(''),
    roleSelect:new FormControl(''),
    notify:new FormControl(true),
    email:new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    experience:new FormControl(''),
    dob:new FormControl(''),
    subscribe:new FormControl()
  });

  roles: Role[] = [
    {id: 1, value:'Student'},
    {id: 2, value:'Learner'},
    {id: 3, value:'Professional'},
  ];

  matcher = new ErrorStateMatcher();

  //countryOptions:string[]=['India','China','Bangladesh','Sri Lanka','Afghanistan'];
  countryOptions:Object[]=[{id:1,name:'India'},{id:2,name:'Bangladesh'},{id:3,name:'Sri Lanka'},
  {id:4,name:'China'},{id:5,name:'Afghanisthan'}];

  filteredOptions:Observable<Object[]>

  constructor(private themeData:ThemeData) {
    this.startDate = new Date(1990, 0, 1);
    this.controlsThemeColor=this.themeData.controlsThemeColor;
   }

   selected(event: MatAutocompleteSelectedEvent):void
   {
    this.selectedCountry=event.option.viewValue;
    this.registrationForm.get('country').setValue('');
   }

   removeChip():void
   {
    this.selectedCountry=null;
   }
  
  ngOnInit() {
    this.filteredOptions = this.registrationForm.controls['country'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Object[] {
    const filterValue = value.toLowerCase();

    return this.countryOptions.filter(option => option['name'].toLowerCase().includes(filterValue));
  }

  
  
   onSubmit()
  {
   console.log(JSON.stringify(this.registrationForm.value));
  }

}
