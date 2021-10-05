import { Table, TableBody, TableHead, TableRow, TableCell, makeStyles, Button, InputLabel, Input } from "@material-ui/core";
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../Service/api";
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    upperContent:{
        width: '90%',
        margin: '50px 0 0 50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    table: {
        width: '90%',
        margin: '50px 0 0 50px',
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF',
        }
    },
    row: {
        '& > *': {
            fontSize: 18,
        }
    },
    tbody: {
        // width:'100%',
        // display: 'block',
        // overflow: 'auto',
        // height: 500
    }
})

const AllData = () => {

    const [users, setUsers] = useState([]);
    // for searching
    const [search, setSearch] = useState('');
    const classes = useStyle();

    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = async () => {
       const response = await getUsers();
       console.log(response.data);
       setUsers(response.data);
    }

    // sorting
    const sorting = () => {
        setUsers([...users].sort((a,b) => {
          return a.title.localeCompare(b.title)
        }))
      }

      const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllData();
      }

    return(
        <>
        <div className={classes.upperContent}>
            <Button variant="contained" onClick={() => sorting()}>Sort</Button>
        <div style={{marginLeft: "20px"}}> 
            <InputLabel>Search</InputLabel>
                <Input onChange={(e) =>  setSearch(e.target.value) }/>
        </div>
        </div>

        <div style={{display:'block'}}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Title </TableCell>
                    <TableCell>description</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody className={classes.tbody}>
                    {
                        users.filter((data) => {
                            if (search === "") {
                                return data
                            }
                            else if (data.title.toLowerCase().includes(search.toLowerCase())) {
                                return data
                            }
                        }).map((item, i) => (
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
                            <TableCell>
                                {item.createdAt}
                            </TableCell>
                     
                            <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${item.id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => { if(window.confirm('Confirm delete?')) {
                                deleteUserData(item.id) }}}>Delete</Button> 
                            </TableCell>
                        </TableRow>
                        ))
                    }
            </TableBody>
        </Table>
                    </div>
        </>
    );
}

export default AllData;