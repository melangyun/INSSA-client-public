import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
// import Skeleton from '@material-ui/lab/Skeleton';
import WholeClubPage from './PageDetail/WholeClubPage';
import './ClubPage.css';

// ClubPage에 필요한 모든 정보 요청 필요
// 1. club descrition
// 2. board : 주요공지, 일반 게시글
//

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

const ContentsViewer = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [boardState, setState] = React.useState({ writeBoard: false, readBoard: false });

  const handleBoard = (state: string): void => {
    state === 'writeBoard'
      ? setState({ ...boardState, writeBoard: !boardState.writeBoard })
      : setState({ ...boardState, readBoard: !boardState.readBoard });
  };

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
          <Tab label="Main" icon={<HomeRoundedIcon />} {...a11yProps(0)} />
          <Tab label="번개" icon={<FlashOnRoundedIcon />} {...a11yProps(1)} />
          <Tab label="게시판" icon={<AssignmentRoundedIcon />} {...a11yProps(2)} />
          <Tab label="채팅" icon={<ForumRoundedIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ height: '100%', backgroundColor: 'white', position: 'relative' }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <WholeClubPage changeBoardFunc={handleBoard} boardState={boardState}>
            Main
          </WholeClubPage>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <WholeClubPage changeBoardFunc={handleBoard} boardState={boardState}>
            번개
          </WholeClubPage>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <WholeClubPage changeBoardFunc={handleBoard} boardState={boardState}>
            게시판
          </WholeClubPage>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <WholeClubPage changeBoardFunc={handleBoard} boardState={boardState}>
            채팅
          </WholeClubPage>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default ContentsViewer;
