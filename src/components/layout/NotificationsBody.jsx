import '../../scss/layout/NotificationsBody.scss';
import { Notification } from '../Notification';
import UserMark from '../../assets/images/avatar-mark-webber.webp';

function NotificationsBody() {
    const typeDates = {
        'm': 'm',
        'd': ' day',
        'ds': ' days',
        'w': ' week',
        'ws': ' weeks'
    }

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
                type={notificationType.d}
                name='Mark Webber'
                avatar={UserMark}
                description='reacted to your recent post'
                theme='My first tournament today!'
                read={false}
                elapsed={1}
                typeDate={typeDates.m}
            />
            <Notification
                type={notificationType.f}
                name='Angela Gray'
                avatar={UserMark}
                read={false}
                elapsed={1}
                typeDate={typeDates.m}
            />
            <Notification
                type={notificationType.g}
                name='Jacob Thompson'
                avatar={UserMark}
                description='has joined tour group'
                theme='Chess Club'
                read={false}
                elapsed={1}
                typeDate={typeDates.d}
            />
            <Notification
                type={notificationType.m}
                name='Rizky Hasanuddin'
                avatar={UserMark}
                read={true}
                elapsed={5}
                typeDate={typeDates.ds}
            />
            <Notification
                type={notificationType.p}
                name='Kimberly Smith'
                avatar={UserMark}
                read={true}
                elapsed={1}
                typeDate={typeDates.w}
            />
            <Notification
                type={notificationType.d}
                name='Nathan Peterson'
                avatar={UserMark}
                description='reacted to your recent post'
                theme='5 end-game strategies to increase your win rate'
                read={true}
                elapsed={2}
                typeDate={typeDates.ws}
            />
            <Notification
                type={notificationType.g}
                name='Anna Kim'
                avatar={UserMark}
                description='left the group'
                theme='Chess Club'
                read={true}
                elapsed={2}
                typeDate={typeDates.ws}
            />
        </div>
    );
}

export { NotificationsBody };
