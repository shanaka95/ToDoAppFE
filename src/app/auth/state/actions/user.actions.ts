/* NgRx */
import { createAction } from '@ngrx/store';

export const togglePasswordVisibility = createAction(
    '[User] Toggle password visibility'
);

export const toggleConfPasswordVisibility = createAction(
    '[User] Toggle confirm password visibility'
);
