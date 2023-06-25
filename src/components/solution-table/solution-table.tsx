import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

import React from 'react';
import { useSelector } from 'react-redux';

import { getFlatSolutionList } from '@helpers/getFlatSolutionList';

import { selectSolutions } from '@store/selectors';
import { Solution, SolutionGroup } from '@store/types';

const columns: ColumnsType<Solution> = [
  {
    title: 'Название',
    dataIndex: 'taskName',
    key: 'taskName',
    sorter: (a, b) => a.taskName.localeCompare(b.taskName),
  },
  {
    title: 'Баллы',
    dataIndex: 'score',
    key: 'score',
    sorter: (a, b) => a.score - b.score,
    width: 120
  },
  {
    title: 'Дата',
    dataIndex: 'dateSolved',
    key: 'dateSolved',
    sorter: (a, b) => a.dateSolved - b.dateSolved,
    render: (value) => dayjs(value * 1000).format('DD.MM.YYYY'),
    width: 120
  },
];

const SolutionTable = () => {
  const solutions = useSelector(selectSolutions);
  const tableData = getFlatSolutionList(solutions);

  return <Table columns={columns} dataSource={tableData} pagination={false} scroll={{ y: 300 }} />;
};

export default SolutionTable;
