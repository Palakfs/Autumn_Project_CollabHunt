import { createSlice } from '@reduxjs/toolkit';
import { fetchGroups } from '../thunks/groupThunk';

interface GroupState {
  groups: { id: number; name: string , group_description: string,group_admin:string}[];
  loading: boolean;
  error: string | null;
}

const initialState: GroupState = {
  groups: [],
  loading: false,
  error: null,
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroups.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.loading = false;
        state.groups = action.payload.map((group: any) => ({
          id: group.group,
          name: group.group_name,
          group_description : group.group_description,
          group_admin: group.group_admin,
        }));
      })
      .addCase(fetchGroups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default groupSlice.reducer;
