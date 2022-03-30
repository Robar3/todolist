import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'FormatPipe'})
export class formatPipe implements PipeTransform {
  public transform(value: number, language: string):string {
    return value.toLocaleString(language);
  }
}
