import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme', // utilizado en las acciones  de Redux
    initialState,
    reducers: {
        toggleTheme: (state) => { // Función reducer para cambiar el tema
           // Cambia el tema de claro a oscuro o de oscuro a claro dependiendo del estado actual
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        }
});
// se exporta toggleTheme para cambiar el tema
export const {toggleTheme} = themeSlice.actions;
//  utilizado en la configuración del store de Redux
export default themeSlice.reducer