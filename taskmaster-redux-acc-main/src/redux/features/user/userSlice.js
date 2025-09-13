import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    name: "Amir Sayeed",
    email: "amirsayeed090@gmail.com",
    userTasks: [],
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {}
})

export default userSlice.reducer;