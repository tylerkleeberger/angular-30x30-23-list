import { Action } from "@ngrx/store";
import { ItemModel } from "../item-model";

export enum itemActions {
    ADD_ITEM = '[ITEM] Add Item',
}

export class AddItemAction implements Action {
    readonly type = itemActions.ADD_ITEM;

    constructor(public payload: ItemModel) {}
}

export type ItemAction = AddItemAction