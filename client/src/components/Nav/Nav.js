import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const SimpleTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      
      <AppBar position="static" style={{backgroundColor:'black',borderRadius:10}}>
        <Tabs
        
          value={value}
          setValue={setValue}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          
            <Tab label="Main" component={Link} to="/"/>
         

         
            <Tab label="About" component={Link} to="/About"/>
          

          
            <Tab label="Songs Notes" component={Link} to="/Notes_songs" />
          
          
        </Tabs>
      </AppBar>
      
    </div>
  );
};

export default SimpleTabs;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
