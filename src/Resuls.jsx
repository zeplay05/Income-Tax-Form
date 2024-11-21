import React from 'react';

const Results = () => {
  const mockResult = {
    totalIncome: 500000,
    deduction: 100000,
    taxableIncome: 400000,
    taxRate: 10,
    tax: 30000,
  };

  const formatNumber = (value) => {
    return typeof value === 'number' ? value.toLocaleString() : '-';
  };

  return (
    <div id="result">
      <h2>ผลการคำนวณ</h2>
      <p>รายได้ทั้งปี: {formatNumber(mockResult.totalIncome)} บาท</p>
      <p>ค่าใช้จ่าย: {formatNumber(mockResult.deduction)} บาท</p>
      <p>รายได้พึงประเมินสุทธิ: {formatNumber(mockResult.taxableIncome)} บาท</p>
      <p>อัตราภาษี: {mockResult.taxRate != null ? `${mockResult.taxRate}%` : '-'}</p>
      <p>ภาษีที่ต้องชำระ: {formatNumber(mockResult.tax)} บาท</p>
    </div>
  );
};

export default Results;
