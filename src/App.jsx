import React, { useState } from 'react';
import './index.css';

const TaxCalculator = () => {
  const [salary, setSalary] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [social, setSocial] = useState(0);
  const [dependents, setDependents] = useState(0);
  const [lifeInsurance, setLifeInsurance] = useState(0);
  const [result, setResult] = useState(null);

  const calculateTax = () => {
    const totalIncome = (salary * 12) + bonus;
    const socialTotal = social * 12;
    const deduction = socialTotal + (dependents * 30000) + lifeInsurance;
    const taxableIncome = totalIncome - deduction - d;

    let taxRate = 0;
    let tax = 0;

    if (taxableIncome > 0) {
      if (taxableIncome <= 150000) {
        taxRate = 0;
      } else if (taxableIncome <= 300000) {
        taxRate = 5;
        tax = (taxableIncome - 150000) * 0.05;
      } else if (taxableIncome <= 500000) {
        taxRate = 10;
        tax = (150000 * 0.05) + ((taxableIncome - 300000) * 0.10);
      } else {
        taxRate = 15;
        tax = (150000 * 0.05) + (200000 * 0.10) + ((taxableIncome - 500000) * 0.15);
      }
    }


    setResult({
      totalIncome,
      deduction,
      taxableIncome,
      taxRate,
      tax,
    });
  };

  return (
    <div>
      <h1>แบบฟอร์มคำนวณภาษี</h1>
      <form>
        <label htmlFor="salary">กรอกเงินเดือน (บาท):</label><br />
<input
  type="text"
  id="salary"

  onChange={(e) => setSalary(parseFloat(e.target.value) )}
  placeholder="กรุณากรอกเงินเดือนของคุณ"
  aria-label="เงินเดือน"
/><br /><br />


        <label>กรอกโบนัส (บาท):</label><br />
        <input
          type="text"
  
          onChange={(e) => setBonus(parseFloat(e.target.value) )}
          placeholder="กรอกโบนัส"
        /><br /><br />

        <label>กรอกหักประกันสังคมต่อเดือน (บาท):</label><br />
        <input
          type="text"

          onChange={(e) => setSocial(parseFloat(e.target.value) )}
          placeholder="กรอกจำนวนเงิน"
        /><br /><br />

        <label>กรอกจำนวนบุตร:</label><br />
        <input
          type="text"
          onChange={(e) => setDependents(parseInt(e.target.value) )}
          placeholder="กรอกจำนวนบุตร"
        /><br /><br />

        <label>กรอกค่าเบี้ยประกันชีวิต (บาท):</label><br />
        <input
          type="text"
          onChange={(e) => setLifeInsurance(parseFloat(e.target.value) )}
          placeholder="กรอกจำนวนเงิน"
        /><br /><br />

        <button type="button" onClick={calculateTax}>คำนวณภาษี</button>
      </form>

      {result && (
        <div id="result">
          <h2>ผลการคำนวณ</h2>
          <p>รายได้ทั้งปี: {result.totalIncome.toLocaleString()} บาท</p>
          <p>ค่าใช้จ่าย: {result.deduction.toLocaleString()} บาท</p>
          <p>รายได้พึงประเมินสุทธิ: {result.taxableIncome.toLocaleString()} บาท</p>
          <p>อัตราภาษี: {result.taxRate}%</p>
          <p>ภาษีที่ต้องชำระ: {result.tax.toLocaleString()} บาท</p>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;
