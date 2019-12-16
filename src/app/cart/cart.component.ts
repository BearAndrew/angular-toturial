import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items;
  checkOutForm;

  constructor(
    private cartService: CartService,
    private formbuilder: FormBuilder,
  ) { 
    this.items = this.cartService.getItems();

    this.checkOutForm = this.formbuilder.group({
      name:'',
      address:'',
    });
  }

  onSummit(customerData){
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
  }

}