import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:{props.log ? 'LOGIN SUCCESSFULL' :  'INCORRECT USERNAME OR PASSWORD'}
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

