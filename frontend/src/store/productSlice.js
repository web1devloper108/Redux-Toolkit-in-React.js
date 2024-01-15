import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

// Thunk frist method-
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    console.log(res)
    const data = await res.json(); 
    // console.log(data) 
    return data;
});

const productSlice = createSlice({ 
    name: 'product', 
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks optional method 2
// export function fetchProductsThunk() {
//     return async function (dispatch) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.error(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }

//////////////////////////////////////////////////////////////////////////////////////

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const STATUSES = Object.freeze({
//     IDLE: 'idle',
//     ERROR: 'error',
//     LOADING: 'loading',
// });

// const productSlice = createSlice({
//     name: 'product',
//     initialState: {
//         data: [], 
//         status: STATUSES.IDLE,
//     },
//     reducers: 
// {    extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state, action) => {
//                 state.status = STATUSES.LOADING;
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.data = action.payload;
//                 state.status = STATUSES.IDLE;
//             })
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.status = STATUSES.ERROR;
//             });
//     },}
// });

// export const { setProducts, setStatus } = productSlice.actions;
// export default productSlice.reducer;

// // Thunks
// // export const fetchProducts = createAsyncThunk('products/fetch', async () => {
// //     const res = await fetch('https://fakestoreapi.com/products');
    
// //     const data = await res.json();
// //     return data;
// // });  

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try { 
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err); 
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }


















// const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// export const STATUSES = Object.freeze({
//     IDLE: 'idle',
//     ERROR: 'error',
//     LOADING: 'loading',
// });
 
// const productSlice = createSlice({ 
//     name: 'product',
//     initialState: {
//         data: [],
//         status: STATUSES.IDLE,
//     },
//     reducers: {
//         // setProducts(state, action) {
//         //     state.data = action.payload;
//         // },
//         // setStatus(state, action) {
//         //     state.status = action.payload;
//         // },
//     }, 
//     extraReducers: (builder) => { 
//         builder
//             .addCase(fetchProducts.pending, (state, action) => {
//                 state.status = STATUSES.LOADING;
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.data = action.payload;
//                 state.status = STATUSES.IDLE;
//             }) 
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.status = STATUSES.ERROR;
//             });
//     },
// });

// export const { setProducts, setStatus } = productSlice.actions;
// export default productSlice.reducer;

// // Thunks
// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     return data;
// });

// // export function fetchProducts() {
// //     return async function fetchProductThunk(dispatch, getState) {
// //         dispatch(setStatus(STATUSES.LOADING));
// //         try {
// //             const res = await fetch('https://fakestoreapi.com/products');
// //             const data = await res.json();
// //             dispatch(setProducts(data));
// //             dispatch(setStatus(STATUSES.IDLE));
// //         } catch (err) {
// //             console.log(err);
// //             dispatch(setStatus(STATUSES.ERROR));
// //         }
// //     };
// // }