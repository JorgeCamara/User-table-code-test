import React from 'react';
import styled from 'styled-components';
import { styleConstants } from '../styles/constants';


const StyledAside = styled.aside.attrs(styledConstants => {
})`
    width: 50%;
    margin-top: 40px;
    padding: 5px 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    border: 3px solid ${({styleConstants}) => styleConstants.primaryTableColor};

    & > label{
        font-size: 16px;
        color: ${({styleConstants}) => styleConstants.primaryTableColor};
        text-transform: uppercase;
        margin: 0px 20px 0px 25%;
    }
`;

const DetailedUser: React.FC<IDetailedUserProps> = ({ user }): JSX.Element => {
    return(
        <StyledAside styleConstants={styleConstants}>
            <label>Selected user info:</label>
            <p>
                <div><label>ID: </label><span>{user.userId}</span></div>
                <div><label>First Name: </label><span>{user.firstName}</span></div>
                <div><label>Last Name: </label><span>{user.lastName}</span></div>
                <div><label>Phone Number: </label><span>{user.phoneNumber}</span></div>
                <div><label>Email Adress: </label><span>{user.emailAddress}</span></div>
            </p>
        </StyledAside>
    )
};

export default DetailedUser;