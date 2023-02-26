import { ItemAction, itemActions } from "../actions/itemActions";
import { ItemModel } from "../item-model";

const initialState: Array<ItemModel> = [
    {
        id: '1',
        department: 'Computer Engineering',
        name: 'C++ Programming',
    },
];

export function itemReducer(
    state: Array<ItemModel> = initialState,
    action: ItemAction
) {
    switch (action.type) {
        case itemActions.ADD_ITEM:
            return [...state, action.payload];
            default:
                return state;
    }
}