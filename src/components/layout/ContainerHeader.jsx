import '../../scss/layout/ContainerHeader.scss';
import { NotificationsCount } from '../NotificationsCount';

function ContainerHeader() {
    return (
        <div className='ContainerHeader d-flx j-between'>
            <div className='ContainerTitle d-flx'>
                <h1 className='Title m-0'>Notifications</h1>
                <NotificationsCount count={3} />
            </div>
            <button className='MarkNotifications m-0'>Mark all as read</button>
        </div>
    );
}

export { ContainerHeader };
