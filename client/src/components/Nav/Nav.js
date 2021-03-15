import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



 const SimpleTabs = ({value,setValue}) =>{
  const classes = useStyles();
  /* const [value, setValue] = React.useState(0); */

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab href="/" label="Main" value={value} />
          <Tab href="/About" label="About" value={value}/>
          <Tab href="/Notes_songs" label="Songs Notes"  value={value}/>
        </Tabs>
      </AppBar>
      
    </div>
  );
}

export default SimpleTabs;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
