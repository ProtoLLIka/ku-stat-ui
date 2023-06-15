import { Typography } from 'antd';

import React from 'react';

const { Text } = Typography;

const NoData: React.FC = () => {
  return <Text type="secondary">Данных с заданными параметрами нет😭</Text>;
};

export default NoData;
