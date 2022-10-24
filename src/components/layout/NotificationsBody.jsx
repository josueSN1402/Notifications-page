import '../../scss/layout/NotificationsBody.scss';
import { Notification } from '../Notification';
import UserMark from '../../assets/images/avatar-mark-webber.webp';

function NotificationsBody() {
    return (
        <div className='Notifications d-flx f-column'>
            <Notification
                name='Mark Webber'
                avatar={UserMark}
                description='reacted to your recent post'
                theme='Post'
                read={false}
                elapsed={1}
                typeDate={'m'}
            />
        </div>
    );
}

export { NotificationsBody };
