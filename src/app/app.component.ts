import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction } from './core-state/actions/itemActions';
import { ItemModel } from './core-state/item-model';
import { State } from './core-state/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items$: Observable<Array<ItemModel>>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
      this.items$ = this.store.select((store) => store.items);
  }

  addItem(form: NgForm) {
    this.store.dispatch(new AddItemAction(form.value));
    form.reset();
  }
}
