import { Component, Input } from '@angular/core';
import { ICodeValue } from '../../models/codevalue';

@Component({
  selector: 'app-codeValue',
  templateUrl: './codeValue.component.html'
})
export class codeValueComponent {
  @Input()    codeValue: ICodeValue;
  
}
