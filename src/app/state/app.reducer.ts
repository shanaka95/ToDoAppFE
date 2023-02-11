import { AppActions } from './actions';
import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';

const initialState: AppState = {
    isMobile : false
};


export const appReducer = createReducer<AppState>(
    initialState,
    on(AppActions.toggleDeviceType, (state, action): AppState => {
        return {
        ...state,
        isMobile: action.isMobile
        };
    })
);
