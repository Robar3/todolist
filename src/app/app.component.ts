import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  private hello={ text: 'hello' };
  private paragraph={ text: 'paragraph' }
  public attrbutes = this.hello;
  public isSomeClass=false;
    public onClick() {
    this.isSomeClass=!this.isSomeClass;
    if (this.attrbutes==this.hello){
      this.attrbutes = this.paragraph;
      return;
    }

    if (this.attrbutes==this.paragraph){
      this.attrbutes = this.hello;
      return;
    }


  }




}
