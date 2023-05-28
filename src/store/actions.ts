import { createAsyncThunk } from '@reduxjs/toolkit';

import getStudentStat from '@api/get-student-stat';

export const getStudentStatAction = createAsyncThunk('getStudentStat', getStudentStat);
