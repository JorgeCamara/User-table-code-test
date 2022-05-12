import React, {useState, useEffect} from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import DetailedUser from './DetailedUser';
import TableFilter from './TableFilter';
import styled from 'styled-components';
import { styleConstants } from '../styles/constants';


const StyledTable = styled.table`
	width: 75%;

	& tbody > tr, thead > tr{
		padding-left: 8px;
	}

	& tr{
		display: flex;
		align-items: center;
		height: 45px;
	}
`;

const StyledFooter = styled.tfoot.attrs(styleConstants => {
})`
	background-color: ${({styleConstants}) => styleConstants.primaryTableColor};
	height: 5px;
`;


const UserTable: React.FC<IUserTableProps> = ({ users, useFilter = false }) => {
    const [tableUsers, setTableUsers] = useState<IUserData[]>(users);
	const [detailedUser, setDetailedUser] = useState<IUserData | null>(null);
    
	const renderRows = () => {
		return tableUsers.map((user: IUserData) => {
			return <TableRow key={user.userId} {...getRowProps(user)}/>;
		});
	};

	const getRowProps = (user: IUserData): ITableRowProps<IUserData> => {
		return{
			rowId: user.userId,
    		headers: getHeaders(),
    		rowData: user,
			rowClickProp: handleRowClick
		}
	};

	const handleRowClick = (userData: IUserData): void => {
		setDetailedUser(userData);
	};

	const onRestoreTableData = () => {
		setTableUsers(users);
	}

	const onTableFilter = (filteringValue: string) => {
		let matchingUsers: IUserData[] = users;
		if(filteringValue){
			matchingUsers = filterUsers(filteringValue);
		}		
		setTableUsers(matchingUsers);
	};

	const filterUsers = (filterText: string): IUserData[] => {
		const filterReg: RegExp = new RegExp(`${filterText}`, 'gi');
		return users.filter((user: IUserData) => {
			let isMatch: boolean = false;
			let userProp: keyof IUserData;
			for(userProp in user){
				if(typeof user[userProp] === 'string' && (user[userProp] as string).match(filterReg)){
					isMatch = true;
					break;
				}				
			}
			return isMatch;
		});
	};

	/**
	 * We use this method to implement in each table the logic for building the table columns from the received data. We could
	 * map each key of the json object to a different column name, decide which columns to show or maybe just show every column 
	 * and with the same name than the key
	 */
	const getHeaders = (): ITableHeader[] => {
		return[
			{
				name: "User Id",
				accessor: "userId",
				width: "10%" 
			},
			{
				name: "First Name",
				accessor: "firstName",
				width: "20%" 
			},
			{
				name: "Last Name",
				accessor: "lastName",
				width: "20%" 
			},
			{
				name: "Phone Number",
				accessor: "phoneNumber",
				width: "20%" 
			},
			{
				name: "Email Adress",
				accessor: "emailAddress",
				width: "30%" 
			},
		]
	};

    return(
		<>
			{useFilter ? <TableFilter onFilter={onTableFilter} onRestore={onRestoreTableData} autoFocus/> : null}
			<StyledTable>
				<TableHeader headers={getHeaders()}/>
				<tbody>
					{renderRows()}
				</tbody>
				<StyledFooter styleConstants={styleConstants}><span></span></StyledFooter>
			</StyledTable>
			{detailedUser ? <DetailedUser user={detailedUser} /> : null}
		</>
    )
};

export default UserTable;