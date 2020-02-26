import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './ContentsViewr.css';

import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import SportsKabaddiOutlinedIcon from '@material-ui/icons/SportsKabaddiOutlined';
import CardListAntd from './ContentsRender/CardListAntd';

type propsType = {
  handelContentPanel: Function;
};

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const a11yProps = (index: number): object => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    paddingBottom: 232,
  },
}));

const ContentsViewer: React.FC<propsType> = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number): void => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="추천 동호회" icon={<FaceOutlinedIcon />} {...a11yProps(0)} />
          <Tab label="내 동호회" icon={<SportsKabaddiOutlinedIcon />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ height: '100%', backgroundColor: 'white', position: 'relative' }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <CardListAntd handelClubClick={props.handelContentPanel}></CardListAntd>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CardListAntd handelClubClick={props.handelContentPanel}></CardListAntd>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default ContentsViewer;
