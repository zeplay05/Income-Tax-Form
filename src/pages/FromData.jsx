import React from 'react';
import PropTypes from 'prop-types';

const FromData = ({
  salary,
  setSalary,
  bonus,
  setBonus,
  social,
  setSocial,
  dependents,
  setDependents,
  lifeInsurance,
  setLifeInsurance,
  calculateTax,
}) => {
  return (
    <form>
      <label htmlFor="salary">กรอกเงินเดือน (บาท):</label><br />
      <input
        type="number"
        id="salary"
        value={salary || ''}
        onChange={(e) => setSalary(parseFloat(e.target.value) || 0)}
        placeholder="กรุณากรอกเงินเดือนของคุณ"
        aria-label="เงินเดือน"
      /><br /><br />

      <label>กรอกโบนัส (บาท):</label><br />
      <input
        type="number"
        value={bonus || ''}
        onChange={(e) => setBonus(parseFloat(e.target.value) || 0)}
        placeholder="กรอกโบนัส"
      /><br /><br />

      <label>กรอกหักประกันสังคมต่อเดือน (บาท):</label><br />
      <input
        type="number"
        value={social || ''}
        onChange={(e) => setSocial(parseFloat(e.target.value) || 0)}
        placeholder="กรอกจำนวนเงิน"
      /><br /><br />

      <label>กรอกจำนวนบุตร:</label><br />
      <input
        type="number"
        value={dependents || ''}
        onChange={(e) => setDependents(parseInt(e.target.value) || 0)}
        placeholder="กรอกจำนวนบุตร"
      /><br /><br />

      <label>กรอกค่าเบี้ยประกันชีวิต (บาท):</label><br />
      <input
        type="number"
        value={lifeInsurance || ''}
        onChange={(e) => setLifeInsurance(parseFloat(e.target.value) || 0)}
        placeholder="กรอกจำนวนเงิน"
      /><br /><br />

      <button type="button" onClick={calculateTax}>คำนวณภาษี</button>
    </form>
  );
};

FromData.propTypes = {
  salary: PropTypes.number.isRequired,
  setSalary: PropTypes.func.isRequired,
  bonus: PropTypes.number.isRequired,
  setBonus: PropTypes.func.isRequired,
  social: PropTypes.number.isRequired,
  setSocial: PropTypes.func.isRequired,
  dependents: PropTypes.number.isRequired,
  setDependents: PropTypes.func.isRequired,
  lifeInsurance: PropTypes.number.isRequired,
  setLifeInsurance: PropTypes.func.isRequired,
  calculateTax: PropTypes.func.isRequired,
};

export default FromData;
