import '../../scss/layout/NotificationsBody.scss';
import { Notification } from '../Notification';
import { UsersNotification } from '../UsersNotification';

function NotificationsBody() {
    const notificationType = {
        'd': 'Default',
        'f': 'Followed',
        'g': 'Group',
        'm': 'Message',
        'p': 'Picture'
    }

    return (
        <div className='Notifications d-flx f-column'>
            <Notification
                type={UsersNotification[0].type}
                name={UsersNotification[0].name}
                avatar={UsersNotification[0].avatar}
                description={UsersNotification[0].description}
                theme={UsersNotification[0].theme}
                read={UsersNotification[0].read}
                elapsed={UsersNotification[0].elapsed}
            />
            <Notification
                type={UsersNotification[1].type}
                name={UsersNotification[1].name}
                avatar={UsersNotification[1].avatar}
                read={UsersNotification[1].read}
                elapsed={UsersNotification[1].elapsed}
            />
            <Notification
                type={UsersNotification[2].type}
                name={UsersNotification[2].name}
                avatar={UsersNotification[2].avatar}
                description={UsersNotification[2].description}
                theme={UsersNotification[2].theme}
                read={UsersNotification[2].read}
                elapsed={UsersNotification[2].elapsed}
                typeDate='d'
            />
            <Notification
                type={UsersNotification[3].type}
                name={UsersNotification[3].name}
                avatar={UsersNotification[3].avatar}
                read={UsersNotification[3].read}
                elapsed={UsersNotification[3].elapsed}
                typeDate='d'
            />
            <Notification
                type={UsersNotification[4].type}
                name={UsersNotification[4].name}
                avatar={UsersNotification[4].avatar}
                read={UsersNotification[4].read}
                elapsed={UsersNotification[4].elapsed}
                typeDate='w'
            />
            <Notification
                type={UsersNotification[5].type}
                name={UsersNotification[5].name}
                avatar={UsersNotification[5].avatar}
                description={UsersNotification[5].description}
                theme={UsersNotification[5].theme}
                read={UsersNotification[5].read}
                elapsed={UsersNotification[5].elapsed}
                typeDate='w'
            />
            <Notification
                type={UsersNotification[6].type}
                name={UsersNotification[6].name}
                avatar={UsersNotification[6].avatar}
                description={UsersNotification[6].description}
                theme={UsersNotification[6].theme}
                read={UsersNotification[6].read}
                elapsed={UsersNotification[6].elapsed}
                typeDate='w'
            />
        </div>
    );
}

export { NotificationsBody };
