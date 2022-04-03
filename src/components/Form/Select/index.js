import React from "react";
import {default as ReactSelect, components} from 'react-select'
import { ReactComponent as DownIcon } from './down.svg';

const customStyles = {
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 14px',
      border:0
    }),
    option: (provided) => ({
        ...provided,
        borderBottom:'1px solid #E6ECEF',
        padding: '14px',
        color: '#868A8D',
        backgroundColor:'white',
        '&:hover': {
            color: '#212229',
            backgroundColor:'white',
            fontWeight: 700
         }
      }),
      menuList: (provided) => ({
        ...provided,
        padding: '0 14px',
      }),
    control: (provided) => ({
        ...provided,
        border: '1px solid #E6ECEF',
        height:42,
        boxShadow: 'none',
        '&:hover': {
            border:'1px solid #E6ECEF'
         }
      }),
      dropdownIndicator: (provided, state) =>{
          return {
        ...provided,
        padding: '14px',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)': ''
    }},
  }

const DropdownIndicator = props => {
return (
    <components.DropdownIndicator {...props}>
    <DownIcon />
    </components.DropdownIndicator>
);
};

const Select = ({ ...props }) => {
    return <ReactSelect 
    styles={customStyles}
    components={{
        IndicatorSeparator: () => null,
        DropdownIndicator
      }}
       {...props}
    />
}
export default Select