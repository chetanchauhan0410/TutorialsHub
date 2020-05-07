import { Injectable } from '@angular/core';

@Injectable()

export class ThemeData{
    /*
      primary
      accent
    */
    mainColor:string='primary';
    toolbarThemeColor:string=this.mainColor;
    controlsThemeColor:string=this.mainColor;
}