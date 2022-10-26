import { useContext } from 'react';
import '../../scss/layout/ContainerHeader.scss';
import { NotificationsCount } from '../NotificationsCount';
import { NotificationContext } from '../NotificationContext';

function ContainerHeader() {
    const { unreadNotification } = useContext(NotificationContext);

    return (
        <div className='ContainerHeader d-flx j-between'>
            <div className='ContainerTitle d-flx'>
                <h1 className='Title m-0'>Notifications</h1>
                <NotificationsCount count={unreadNotification} />
            </div>
            <button className='MarkNotifications m-0'>Mark all as read</button>
        </div>
    );
}

export { ContainerHeader };
