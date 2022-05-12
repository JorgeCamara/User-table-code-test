import React from 'react';
import styled from 'styled-components';
import { styleConstants } from '../styles/constants';


const StyledHeader = styled.thead.attrs(styleConstants => {
})`
	border-top-right-radius: 6px;
	border-top-left-radius: 6px;
    background-color: ${({styleConstants}) => styleConstants.primaryTableColor};
	display: table;
    width: 100%;
	color: white;
	font-size: 16px;
	font-weight: bold;
`;

const StyledTd = styled.td.attrs(width => {
})`
    width: ${({width}) => width ? width : "auto"};
`;

const TableHeader: React.FC<ITableHeaderProps> = ({headers}) => {
    
    const renderColumns = () =>  {
        return headers.map((header: ITableHeader) => {
            return <StyledTd width={header.width} key={header.accessor}>{header.name}</StyledTd>;
        })
    }

    return(
        <StyledHeader styleConstants={styleConstants}>
            <tr>
                {renderColumns()}
            </tr>
        </StyledHeader>
    )
};

export default TableHeader;