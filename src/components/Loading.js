import React from 'react';
import { useSelector } from 'react-redux';

let Loading = () => {
  const loading = useSelector((state) => state.loading);
  return loading ? (
    <div style={{ textAlign: 'center' }}>
      <h1>Загрузка</h1>
    </div>
  ) : null;
};

export default Loading;
