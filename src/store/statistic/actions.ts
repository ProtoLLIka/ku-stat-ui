import { createAsyncThunk } from '@reduxjs/toolkit';
import getStudentStat from 'api/get-student-stat';
import { SolutionGroup } from 'store/statistic/types';

const getStudentStatAction = createAsyncThunk('stat/getStudentStatAction', getStudentStat);

export { getStudentStatAction };
