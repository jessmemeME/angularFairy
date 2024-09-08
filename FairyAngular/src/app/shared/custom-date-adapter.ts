import { NativeDateAdapter } from '@angular/material/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomDateAdapter extends NativeDateAdapter {
  override parse(value: any): Date | null {
    if ((typeof value === 'string') && value.indexOf('/') > -1) {
      const str = value.split('/');
      const day = +str[0];
      const month = +str[1] - 1;
      const year = +str[2];
      return new Date(year, month, day);
    }
    return null;
  }

  override format(date: Date, displayFormat: Object): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${this._to2digit(day)}/${this._to2digit(month)}/${year}`;
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}
