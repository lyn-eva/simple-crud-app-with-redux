import { createSlice } from '@reduxjs/toolkit';

const generateId = (name, age) => name + Math.random().toFixed(5) + age;

const memberSlice = createSlice({
  name: 'members',
  initialState: { list: [{ name: 'musashi miyamoto', age: 36, id: 0 }] },
  reducers: {
    addMember: (state, action) => {
      state.list = [
        ...state.list,
        { ...action.payload, id: generateId(action.payload.name, action.payload.age) },
      ];
    },
    removeMember: (state, action) => {
      state.list = state.list.filter((member) => member.id !== action.payload.id);
    },
    updateMember: (state, action) => {
      state.list = state.list.map((member) =>
        member.id === action.payload.id
          ? {
              name: action.payload.name || member.name,
              age: action.payload.age || member.age,
              id: generateId(action.payload.name, action.payload.age),
            }
          : member
      );
    },
  },
});

export const { addMember, removeMember, updateMember } = memberSlice.actions;
export const selectMember = (state) => state.members.list;
export default memberSlice.reducer;
