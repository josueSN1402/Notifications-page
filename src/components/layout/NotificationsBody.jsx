import { useContext } from 'react';
import '../../scss/layout/NotificationsBody.scss';
import { Notification } from '../Notification';
import { NotificationContext } from '../NotificationContext';

function NotificationsBody() {
    const { items: UsersNotification } = useContext(NotificationContext);

    return (
        <div className='Notifications d-flx f-column'>
            <Notification userNotification={UsersNotification[0]} />
            <Notification userNotification={UsersNotification[1]} />
            <Notification
                userNotification={UsersNotification[2]}
                typeDate='d'
            />
            <Notification
                userNotification={UsersNotification[3]}
                typeDate='d'
            />
            <Notification
                userNotification={UsersNotification[4]}
                typeDate='w'
            />
            <Notification
                userNotification={UsersNotification[5]}
                typeDate='w'
            />
            <Notification
                userNotification={UsersNotification[6]}
                typeDate='w'
            />
        </div>
    );
}

export { NotificationsBody };
