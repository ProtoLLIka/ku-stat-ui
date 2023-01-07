import axios, { AxiosResponse } from 'axios';
import { SolutionGroup } from 'store/statistic/types';

import api from 'utils/apiInterceptor';

const getStudentStat = async (id: number): Promise<AxiosResponse<SolutionGroup[]>> => {
  const data = await api.get<SolutionGroup[]>(`/student/stat/${id}`);

  return data;
};

export default getStudentStat;
