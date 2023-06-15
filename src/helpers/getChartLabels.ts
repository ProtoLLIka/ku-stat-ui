import type { Period } from '@type/period';
import dayjs from 'dayjs';

import type { SolutionGroup } from '@store/types';

const labelFormatFunctions = {
  day: (date: number): string => dayjs(date * 1000).format('DD.MM'),
  week: (date: number): string => dayjs(date * 1000).format('DD.MM'),
  month: (date: number): string => dayjs(date * 1000).format('MM.YYYY'),
};

export const getChartLabels = (date: number, period: Period): string =>
  labelFormatFunctions[period](date);
