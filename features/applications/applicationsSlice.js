import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchApplications = createAsyncThunk(
    'applications/fetchApplications',
    async () => {
        const response = await fetch(baseUrl + 'applications');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const applicationsSlice = createSlice({
    name: 'applications',
    initialState: { isLoading: true, errMess: null, applicationArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApplications.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchApplications.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.campsitesArray = action.payload;
            })
            .addCase(fetchApplications.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const applicationsReducer = campsitesSlice.reducer;
