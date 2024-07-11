import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {clientRepository} from "..";

import {Client, ClientWithoutId} from "~client/data/api/models";

interface ClientStateI {
  clients: Client[];
  isLoading: boolean;
  error: string;
  isInitiated: boolean;
}

const initialState: ClientStateI = {
  clients: [],
  isLoading: false,
  error: "",
  isInitiated: false,
};

export const getClientsAction = createAsyncThunk(
  "clients/getClients",
  async (_, {dispatch}) => {
    clientRepository.updateClients().then(async () => {
      const data = await clientRepository.getClinents();
      dispatch(updateClients(data));
    });
    const data = await clientRepository.getClinents();
    return data;
  },
);

export const addCLientAction = createAsyncThunk<Client[], ClientWithoutId>(
  "clients/addClients",
  async client => {
    const data = await clientRepository.addClient(client);
    return data;
  },
);

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    updateClients(state, action: {payload: Client[]}) {
      state.clients = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getClientsAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getClientsAction.fulfilled, (state, action) => {
      state.clients = action.payload;
      state.isLoading = false;
      state.isInitiated = true;
    });
    builder.addCase(getClientsAction.rejected, (state, action) => {
      state.error = action.error.message ?? "";
      state.isLoading = false;
      state.isInitiated = true;
    });
    builder.addCase(addCLientAction.pending, state => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(addCLientAction.fulfilled, (state, action) => {
      state.clients = action.payload;
      state.isLoading = false;
      state.isInitiated = true;
    });
    builder.addCase(addCLientAction.rejected, (state, action) => {
      console.log("Error Handled : ", action);
      state.error = action.error.message ?? "";
      state.isLoading = false;
      state.isInitiated = true;
    });
  },
});

export const {updateClients} = clientSlice.actions;

export default clientSlice.reducer;
