import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SuggestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private _snackBar: MatSnackBar) {}

    onCancelClick(): void {
      this.dialogRef.close();
    }

    ngOnInit(): void {
    }
   
    openSnackBar() {
      this._snackBar.open('Thanks. We will get back to you soon :)','Close', {
        duration: 2000,
      });
    }

}
