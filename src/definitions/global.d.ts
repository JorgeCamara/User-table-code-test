interface IUserData{
	userId: number,
	firstName: string,
	lastName: string,
	phoneNumber: string,
	emailAddress: string
}

interface IUserTableProps{
	users: IUserData[];
	useFilter: boolean;
}

interface ITableRowProps<T>{
    rowId: number;
    headers: ITableHeader[];
    rowData: T; 
	rowClickProp?: (rowData: T) => void;
}

interface ITableHeader{
	name: string;
	accessor: string;
	width?: string;
}

interface ITableFilterProps{
    onFilter: (filterValue: string) => void;
    onRestore: () => void;
    autoFocus?: boolean;
}

interface IDetailedUserProps{
    user: IUserData;
}

interface ITableHeaderProps{
    headers: ITableHeader[];
}