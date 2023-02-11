import { createAction, props } from '@ngrx/store';

export const toggleDeviceType = createAction(
  '[App] Toggle device type',
  props<{ isMobile: boolean }>()
);
