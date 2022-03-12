import React from "react";
import {AutoComplete} from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Header = () =>{

    const classes = useStyles();

    return(
        <AppBar style={{backgroundColor:"crimson"}} position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h4" className={classes.title}>
                    <b>81IZ</b>
                </Typography>
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Son Deneyimler
                </Typography>
                {/* <AutoComplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                    </div>
                    <InputBase placeholder="Ara ...."  classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                {/* </AutoComplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;