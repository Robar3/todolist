import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input()
  cardNumber: string = 'defaultType';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cardNumber == null) {
      this.cardNumber = 'defaultType';
    }
  }

  @Input() cardName: string|undefined;
  @Input() paymentSystem: "Visa" | "Mastercard"="Visa";
  @Input() amount: string | undefined;
  @Input() expirationDate: string | undefined

  constructor() {
  }

  ngOnInit(): void {

  }

}
