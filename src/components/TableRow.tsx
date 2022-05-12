import React from 'react';
import styled from 'styled-components';
import { styleConstants } from '../styles/constants';


const StyledRow = styled.tr.attrs(constants => {
})`
    color: black;
    display: table;
    width: 100%;
    
    &:hover{
        background-color: ${({constants}) => constants.rowHoverBackground};
        color: ${({constants}) => constants.primaryTableColor};
        cursor: pointer;
        font-weight: bold;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;

const StyledTd = styled.td.attrs(width => {
})`
    width: ${({width}) => width ? width : "auto"};
`;

const TableRow: React.FC<ITableRowProps<any>> = (props): JSX.Element => {
    const {rowData, headers, rowClickProp} = props;
    /**
     * To render each cell, we will iterate the headers, getting the accesor of each one and
     * then searching on the data object a value with that accessor as key. If everything is 
     * well built, they should fit. If not found, we write three minus signs by default.
     * @returns an array of td elements for the current table row
     */
    const renderCells = (): JSX.Element[] => {
        return headers.map((header: ITableHeader) => {
            const cellValue = rowData[header.accessor] || " --- ";
            return <StyledTd width={header.width} key={header.accessor}>{cellValue}</StyledTd>
        })
    }

    const handleClick = () => {
        if(rowClickProp) {
            rowClickProp(rowData);
        }        
    }
    
    return(
        <StyledRow onClick={() => handleClick()} constants={styleConstants}>
            {renderCells()}
        </StyledRow>
    )
};

export default TableRow;