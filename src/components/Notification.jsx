import '../scss/components/Notification.scss';

function Notification({ userNotification, typeDate }) {
    let timeUnit;

    if (userNotification.elapsed > 1) {
        if (typeDate === 'd') {
            timeUnit = ' days';
        }
        else if (typeDate === 'w') {
            timeUnit = ' weeks';
        } else {
            timeUnit = 'm';
        }
    } else {
        if (typeDate === 'd') {
            timeUnit = ' day';
        }
        else if (typeDate === 'w') {
            timeUnit = ' week';
        } else {
            timeUnit = 'm';
        }
    }

    return (
        <div className={`Notification d-flx${!userNotification.read ? ' Notification-Unread' : ''}`}>
            <div className='AvatarContainer'>
                <img
                    src={userNotification.avatar}
                    alt={`Avatar of ${userNotification.name}`}
                    className='AvatarUser'
                />
            </div>
            <div className='NotificationBody d-flx f-column'>
                <div className='NotificationContent d-flx'>
                    <p>
                        <a href="/" className='NotificationName'>{`${userNotification.name} `}</a>
                        <span className='NotificationDescription'>
                            {   userNotification.type === 'Followed'
                                ? 'followed you '
                                : userNotification.type === 'Message' && !userNotification.description
                                ? 'sent you a private message '
                                : userNotification.type === 'Picture' && !userNotification.description
                                ? 'commented on your picture '
                                : `${userNotification.description} `
                            }
                        </span>
                        { userNotification.type !== 'Followed' && userNotification.type !== 'Message' && userNotification.type !== 'Picture' 
                            && (
                                <a href="/" className={`Theme${userNotification.type === 'Group' ? ' GroupName' : ''}`}>
                                    {userNotification.theme}
                                </a>)
                        }
                    </p>
                    {!userNotification.read && (
                        <div className='NotificationUnread d-flx'>
                            <span>•</span>
                        </div>
                    )}
                </div>
                <div className='NotificationElapsedTime'>
                    <p>
                        <span id='Elapsed'>{userNotification.elapsed}</span>
                        <span id='TypeDate'>{timeUnit}</span> ago
                    </p>
                </div>
                { userNotification.type === 'Message' &&
                    <a href="/">
                        <div className='NotificationMessage' >
                                <p>{userNotification.message}</p>
                        </div>
                    </a>
                }
            </div>
        </div>
    );
}

export { Notification };
