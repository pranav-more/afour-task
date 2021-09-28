import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})

const Nav = () => {
    const classes = useStyle();
    return(
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="/" exact>
                    home
                </NavLink>
                <NavLink className={classes.tabs} to="all" exact>
                    All data
                </NavLink>
                <NavLink className={classes.tabs} to="add" exact>
                    Add data
                </NavLink>
            </Toolbar>
        </AppBar>
        )
}

export default Nav;