import { Checkbox } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import './FilterProducts.scss'
import React from 'react';

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues);
};



const optionsStyle = [
  { label: 'Oxford', value: 'Oxford' },
  { label: 'Derby', value: 'Derby' },
  { label: 'Monk Strap', value: 'monkStrap' },
  { label: 'Loafer', value: 'Loafer' },
];
const materialOptions = [
    { label: 'Calf Leather', value: 'calfLeather' },
    { label: 'Crocodile', value: 'crocodile' },
    { label: 'Suede', value: 'suede' },
    
  ];
  


const FilterProducts: React.FC = () => (
  <div className='filter-main'>
     <p className='filterHeading'>Style</p>
     <Checkbox.Group
      options={optionsStyle}
      defaultValue={['calfLeather']}
      className="custom-checkbox"
      onChange={onChange}
    >
      {optionsStyle.map((option) => (
        <div key={option.value}>
          <Checkbox value={option.value}>{option.label}</Checkbox>
        </div>
      ))}
    </Checkbox.Group>
    <br />
    <br />
    <p className='filterHeading'>Material</p>
    <Checkbox.Group  className="custom-checkbox" options={materialOptions} defaultValue={['calfLeather']} onChange={onChange} />
    <br />
 
   
  </div>
);

export default FilterProducts;