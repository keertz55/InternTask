import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

interface Field {
  name: string;
  type: string;
  fields?: Field[];
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() fields: Field[] = [];
  @Input() button:string;
  @Output() save = new EventEmitter<Field[]>();

  ngOnInit(): void {
    
  }

  addField(field: Field) {
    if (!field.fields) {
      field.fields = [];
    }
    field.fields.push({ name: '', type: 'string' });
  }

  onChange(field){
    if(field.type=='object'){
      if (!field.fields) {
        field.fields = [];
      }
      field.fields.push({ name: '', type: 'string' });
    }
  }

  deleteField(index: number) {
    this.fields.splice(index, 1);
  }

  saveForm() {
    this.save.emit(this.fields);
  }

}
