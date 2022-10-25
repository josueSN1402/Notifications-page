import '../../scss/layout/NotificationsBody.scss';
import { Notification } from '../Notification';
import { Users } from '../Users';

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
                name={Users[0].name}
                avatar={Users[0].avatar}
                description='reacted to your recent post'
                theme='My first tournament today!'
                read={false}
                elapsed={1}
            />
            <Notification
                type={notificationType.f}
                name={Users[1].name}
                avatar={Users[1].avatar}
                read={false}
                elapsed={1}
            />
            <Notification
                type={notificationType.g}
                name={Users[2].name}
                avatar={Users[2].avatar}
                description='has joined tour group'
                theme='Chess Club'
                read={false}
                elapsed={1}
                typeDate='d'
            />
            <Notification
                type={notificationType.m}
                name={Users[3].name}
                avatar={Users[3].avatar}
                read={true}
                elapsed={5}
                typeDate='d'
            />
            <Notification
                type={notificationType.p}
                name={Users[4].name}
                avatar={Users[4].avatar}
                read={true}
                elapsed={1}
                typeDate='w'
            />
            <Notification
                type={notificationType.d}
                name={Users[5].name}
                avatar={Users[5].avatar}
                description='reacted to your recent post'
                theme='5 end-game strategies to increase your win rate'
                read={true}
                elapsed={2}
                typeDate='w'
            />
            <Notification
                type={notificationType.g}
                name={Users[6].name}
                avatar={Users[6].avatar}
                description='left the group'
                theme='Chess Club'
                read={true}
                elapsed={2}
                typeDate='w'
            />
        </div>
    );
}

export { NotificationsBody };
