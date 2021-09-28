import { Table, TableBody, TableHead, TableRow, TableCell, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getData } from "../Service/api";

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const AllData = () => {

    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = async () => {
       const response = await getData();
       console.log(response.data);
       setUsers(response.data);
    }

    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Title </TableCell>
                    <TableCell>description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {
                        users.map((item, i) => (
                        <TableRow className={classes.row}>
                            <TableCell>
                                {item.id}
                            </TableCell>
                            <TableCell>
                                {item.title}
                            </TableCell>
                            <TableCell>
                                {item.description}
                            </TableCell>
                        </TableRow>
                        ))
                    }
            </TableBody>
        </Table>
    );
}

export default AllData;