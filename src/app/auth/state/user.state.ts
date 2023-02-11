import { createFeatureSelector, createSelector } from '@ngrx/store';

// State for this feature (User)
export interface UserState {
    showPassword: boolean;
    showConfPassword: boolean;
}

// Selector functions
const selectUserFeatureState = createFeatureSelector<UserState>('user');

export const selectShowPassword = createSelector(
    selectUserFeatureState,
    state => state.showPassword
);

export const selectShowConfPassword = createSelector(
    selectUserFeatureState,
    state => state.showConfPassword
);
