import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-quantity-cell-renderer',
  template: `
         {{params.value}}
  `,
})
export class QuantityCellRendererComponent implements OnInit {
  params: any;
  enableControls: any;

  constructor(private store: Store<any>) { }

  agInit(params) {
    this.params = params;
  }

  onDecrementQuantity(e) { }

  onIncrementQuantity() { }


  ngOnInit() {
    this.store.subscribe((store) => {
      this.enableControls = store.grid.enableControls;
    });

  }
}
