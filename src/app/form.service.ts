import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';

// TODO: see if is better to use some enums
/*
export enum TypeForm {
  text,
  number,
  select,
  date
}

export enum Validators {
  required,
  withoutRString
}
*/

function withoutRStringValidator(control: AbstractControl): { [key: string]: boolean } | null {

  const value: string = control.value;

  if (value && value.toLowerCase().includes('r')) {

    return {'you have one R in your input': true};

  }

  return null;

}


export interface FormFromBack {

  label: string;
  currentValue: string;
  typeForm: string;
  validators?: string[];
  values?: string[] | any; // TODO: add complex type releated with typForm

}


export interface FormToShow {

  label: string;
  formControl: FormControl;
  typeForm: string;
  values: string[] | any; // TODO: add complex type releated with typForm;

}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  // TODO: complete list of validators;
  validatorsConverter = {
    required: Validators.required,
    withoutRString: withoutRStringValidator
  };


  constructor(private fb: FormBuilder) {

  }


  getFormToShow(): Observable<FormFromBack[]> {

    const formToShow: FormFromBack[] = [
      {
        label: 'Name',
        currentValue: '',
        typeForm: 'text',
        validators: ['withoutRString']

      },
      {
        label: 'Last Name',
        currentValue: 'Delete the R',
        typeForm: 'text',
        validators: ['withoutRString']

      },
      {
        label: 'Descriptipn',
        currentValue: '',
        typeForm: 'textarea',
      },
      {
        label: 'age',
        currentValue: '1',
        typeForm: 'number'
      },
      {
        label: 'Choix',
        currentValue: 'choix 2',
        typeForm: 'list',
        values: [
          'choix 1',
          'choix 2',
          'choix 3',
        ]
      }
    ];
    return of(formToShow);

  }

  convertToFormsToShow(formsFromBack: FormFromBack[]): FormToShow[] {

    const formsToShow: FormToShow[] = formsFromBack.map((form) => {

      const formControl = this.fb.control(form.currentValue);

      if (form.validators && form.validators.length > 0) {
        // TODO: add missings catch of missings values
        const validators = form.validators.map(name => this.validatorsConverter[name]);
        formControl.setValidators(validators);
      }

      const formToShow: FormToShow = {
        label: form.label,
        typeForm: form.typeForm,
        values: form.values,
        formControl
      };

      return formToShow;

    });

    return formsToShow;

  }


}
