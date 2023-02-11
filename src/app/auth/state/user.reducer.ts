/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './actions';
import { UserState } from './user.state';

const initialState: UserState = {
    showPassword : true,
    showConfPassword: true
};

export const userReducer = createReducer<UserState>(
    initialState,
    on(UserActions.togglePasswordVisibility, (state): UserState => {
      return {
        ...state,
        showPassword: !state.showPassword
      };
    }),

    on(UserActions.toggleConfPasswordVisibility, (state): UserState => {
        return {
          ...state,
          showConfPassword: !state.showConfPassword
        };
    }),
);
