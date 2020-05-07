import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SuggestionComponent} from './suggestion/suggestion.component';
import {ThemeData} from './data/themeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tutorials Hub';
  toolBarTheme:string='';
  constructor(public dialog: MatDialog, public themeData:ThemeData) {
    this.toolBarTheme=themeData.toolbarThemeColor;
  }

  ngOnInit()
  { 
  }

  goToHome()
  {
    
  }

  openDialog():void
  {
    
    const dialogRef = this.dialog.open(SuggestionComponent, {
      width: '400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

}
