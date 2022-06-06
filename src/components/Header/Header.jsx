import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import useStyles from './styles.js';

const Header = () => {
  const classes = useStyles();

  return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h4" className={classes.title}> 
                    Travel Guide
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                        <div className={classes.search}>
                            <InputBase placeholder="Search..." className={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;


















// <AppBar>
//   <Toolbar>
//     <Typography variant="h5">
//       Travel Advisor
//     </Typography>
//     <Box display="flex">
//       <Typography variant="h6">
//         Explore new places
//       </Typography>
//         <div>
//           <div>
//             <SearchIcon />
//           </div>
//           <InputBase placeholder="Search…" />
//         </div>
//     </Box>
//   </Toolbar>
// </AppBar>