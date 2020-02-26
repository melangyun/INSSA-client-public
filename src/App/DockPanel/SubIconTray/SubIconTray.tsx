/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 380,
      flexGrow: 1,
    },
    speedDial: {
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
  }),
);

const actions = [
  { icon: <ShareOutlinedIcon />, name: 'Share' },
  { icon: <LockOpenOutlinedIcon />, name: 'logout' },
  { icon: <ExitToAppOutlinedIcon />, name: 'login' },
  { icon: <AccountCircleOutlinedIcon />, name: 'mypage' },
  { icon: <PersonAddOutlinedIcon />, name: 'join' },
  { icon: <HomeOutlinedIcon />, name: 'home' },
];

type propsType = {
  handelContentPanel: Function;
};

const OpenIconSpeedDial: React.FC<propsType> = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  const handelPanel = (name: string): void => {
    handleClose();
    props.handelContentPanel('notClubPage', name);
  };

  return (
    <div className="SubIconTray">
      <div className={classes.root}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          className={classes.speedDial}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={(): void => {
                handelPanel(action.name);
              }}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
};

export default OpenIconSpeedDial;
