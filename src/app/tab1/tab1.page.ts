import {Component, OnInit} from '@angular/core';
import {FormService, FormToShow} from '../form.service';
import {map, tap} from 'rxjs/operators';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  formsToShow: FormToShow[];
  allForms: FormArray;

  constructor(private formService: FormService,
              private fb: FormBuilder
              ) {
  }

  ngOnInit(): void {

    this.formService.getFormToShow()
      .pipe(
        map(form => this.formService.convertToFormsToShow(form)),
        tap(formToShow => this.allForms = this.fb.array(formToShow.map(f => f.formControl)))
      )
      .subscribe(formsToShow => this.formsToShow = formsToShow);

  }

  isSimpleType(typeForm: string) {
    return ['text', 'number'].includes(typeForm);
  }

  isListType(typeForm: string) {
    return ['list'].includes(typeForm);
  }

  sendToServer() {
    alert('See the console with F12');
    // TODO: add your own logic to send to back
    console.log('Send to back', this.allForms.getRawValue());
  }

  isTextarea(typeForm: string) {
    return ['textarea'].includes(typeForm);
  }
}
