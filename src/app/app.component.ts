import { Component } from '@angular/core';

interface Field {
  name: string;
  type: string;
  fields?: Field[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fields: Field[] = [];

  addFields(){
    this.fields.push({ name: '', type: 'string' })
  }

  saveForm(fields: Field[]) {
    console.log(fields);
  }
}
