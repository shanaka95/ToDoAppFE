import { createFeatureSelector, createSelector } from '@ngrx/store';


// App State
export interface AppState {
    isMobile: boolean;
}

// Selector functions
const selectAppFeatureState = createFeatureSelector<AppState>('app');

export const selectDeviceType = createSelector(
    selectAppFeatureState,
    state => state.isMobile
);
