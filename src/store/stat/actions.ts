import { createAsyncThunk } from '@reduxjs/toolkit';
import getStudentStat from 'api/getStudentStat';

const getStudentStatAction = createAsyncThunk('stat/getStudentStatAction', getStudentStat);

export { getStudentStatAction };
