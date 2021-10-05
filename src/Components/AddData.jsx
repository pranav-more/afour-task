import { FormControl, FormGroup, Input, InputLabel, Button, makeStyles, Typography } from "@material-ui/core";
import moment from 'moment';
import {useState, useEffect} from 'react';
import { addUser,getUsers } from '../Service/api';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *':{
            marginTop: 20
        }
    }
})

const initialValue = {
    title:'',
    description:'',
    createdAt: moment().format('DD/MM/YYYY')
}


const AddData = () => {

    const [user, setUser] = useState(initialValue);

    // get data
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllData();
    }, [])
    const getAllData = async () => {
        const response = await getUsers();
        // console.log(response.data);
        setData(response.data.title);
     }


    const { title, description, createdAt } = user;
    const classes = useStyles();
    let history = useHistory();


    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    
    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all');
        console.log(user.title)
    }


    // validation
    // const checkData = () =>{
    //     const exisitingData = data.map( (e) => {
    //         if(e.title === user.title){
    //             alert("please enter unique value!")
                
    //             return true;
    //         }
    //         console.log(exisitingData);
    //     });
        
    // }

    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add user</Typography>
            <FormControl>
                <InputLabel>Title</InputLabel>
                <Input onChange={ (e) => onValueChange(e) } name='title' required />
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={ (e) => onValueChange(e) } name='description' required />
            </FormControl>
            {/* <FormControl>
                <InputLabel>Created At</InputLabel>
                <Input onChange={ (e) => onValueChange(e) } name='createdAt'/>
            </FormControl> */}
            
            <Button variant="contained" onClick={() => addUserDetails()} color="primary"> Add</Button>
        </FormGroup>
        )
}

export default AddData;