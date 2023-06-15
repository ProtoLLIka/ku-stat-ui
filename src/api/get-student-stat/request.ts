import { Period } from '@type/period';

import { SolutionGroup } from '@store/types';

import api from '@utils/api-interceptor';

type GetStudentStatParams = {
  id: string;
  group?: Period;
  dateStart?: number | null;
  dateEnd?: number | null;
};

const getStudentStat = async ({
  id,
  group,
  dateStart,
  dateEnd,
}: GetStudentStatParams): Promise<SolutionGroup[]> => {
  const params = {
    group,
    ...(dateStart ? { dateStart } : null),
    ...(dateEnd ? { dateEnd } : null),
  };

  const response = await api.get<SolutionGroup[]>(`/student/stat/${id}`, {
    params,
  });

  return response.data;
};

export default getStudentStat;
