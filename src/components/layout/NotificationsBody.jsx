import '../../scss/layout/NotificationsBody.scss';
import { Notification } from '../Notification';
import { UsersNotification } from '../UsersNotification';

function NotificationsBody() {
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
