import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { styleConstants } from '../styles/constants';

const StyledSection = styled.section.attrs(styleConstants => {
})`
    display: flex;
    margin: 25px 0px;

    & input{
        min-width: 300px;
        height: 25px;
        border-radius: 5px;
        margin-right: 10px;
        border: 1px solid ${({styleConstants}) => styleConstants.primaryTableColor};

        &:focus{
            outline: none;
        }
    }
`;

const StyledButton = styled.button.attrs(styleConstants => {
})`
    width: 85px;
    color: ${({styleConstants}) => styleConstants.primaryTableColor};
    border-radius: 5px;
    border: 1px solid ${({styleConstants}) => styleConstants.primaryTableColor};
    margin: 0px 10px;

    &:hover{
        color: white;
        cursor: pointer;
        background-color: ${({styleConstants}) => styleConstants.primaryTableColor};
    }
`;

// Here we are changing the style for the Cancel Button just to force a case of use of extending a component style using styled-components
const CancelButton = styled(StyledButton)`
    color: white;
    background-color: ${({styleConstants}) => styleConstants.primaryTableColor};

    &:hover{
        font-weight: bold;
    }
`;

const TableFilter: React.FC<ITableFilterProps> = ({...props}): JSX.Element => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const {onFilter, onRestore, autoFocus = false} = props;
    const [filterValue, setFilterValue] = useState("");
    
    useEffect(() => {
        if(autoFocus){
            inputRef?.current?.focus();
        }
    }, [autoFocus])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            onFilter(filterValue);
        }
    };
    
    return(
        <StyledSection styleConstants={styleConstants}>
            <input value={filterValue} onChange={(e) => setFilterValue(e.target.value)} onKeyDown={(ev) => handleKeyDown(ev)} ref={inputRef}/>
            <StyledButton onClick={() => onFilter(filterValue)} styleConstants={styleConstants}>Filter</StyledButton>
            <CancelButton onClick={() => onRestore()} styleConstants={styleConstants}>Restore</CancelButton>
        </StyledSection>
    )
};

export default TableFilter;