import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.State>(
  fromApp.appFeatureKey
);

export const selectItems = createSelector(
  selectAppState,
  (state: fromApp.State) => state.items
);

export const selectSelectedItem = createSelector(
  selectAppState,
  (state: fromApp.State) => state.selectedItem
)