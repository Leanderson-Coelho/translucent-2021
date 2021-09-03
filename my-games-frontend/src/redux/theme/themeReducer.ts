// Theme Reducer

export const LIGHT_TYPE = 'LIGHT';
export const DARK_TYPE = 'DARK';

interface State {
  themeConfig: 'LIGHT' | 'DARK';
}

const initialState: State = {
  themeConfig: LIGHT_TYPE,
};

const themeReducer = (state = initialState): State =>
  state.themeConfig === LIGHT_TYPE
    ? { themeConfig: DARK_TYPE }
    : { themeConfig: LIGHT_TYPE };

export default themeReducer;
