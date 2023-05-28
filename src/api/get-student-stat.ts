import    { AxiosResponse } from 'axios';
import { SolutionGroup } from '@store/types';

import api from '@utils/api-interceptor';
import { STAT_GROUP } from '@type/group-types';

type StatRequestParams = {
  id: number,
  group: STAT_GROUP
}

const getStudentStat = async (id: number): Promise<AxiosResponse<SolutionGroup[]>> => {
  const data = await api.get<SolutionGroup[]>(`/student/stat/${id}`)

  return data
}

export default getStudentStat;
