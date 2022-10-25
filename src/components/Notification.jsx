import '../scss/components/Notification.scss';

function Notification(props) {
    return (
        <div className={`Notification d-flx${!props.read ? ' Notification-Unread' : ''}`}>
            <div className='AvatarContainer'>
                <img
                    src={props.avatar}
                    alt={`Avatar's ${props.name}`}
                    className='AvatarUser'
                />
            </div>
            <div className='NotificationBody d-flx f-column'>
                <div className='NotificationContent d-flx'>
                    <p>
                        <a href="/" className='NotificationName'>{`${props.name} `}</a>
                        <span className='NotificationDescription'>
                            {   props.type === 'Followed'
                                ? 'followed you '
                                : props.type === 'Message' && !props.description
                                ? 'sent you a private message '
                                : props.type === 'Picture' && !props.description
                                ? 'commented on your picture '
                                : `${props.description} `
                            }
                        </span>
                        { props.type !== 'Followed' && props.type !== 'Message' && props.type !== 'Picture' 
                            && (
                                <a href="/" className={`Theme${props.type === 'Group' ? ' GroupName' : ''}`}>
                                    {props.theme}
                                </a>)
                        }
                    </p>
                    {!props.read && (
                        <div className='NotificationUnread d-flx'>
                            <span>•</span>
                        </div>
                    )}
                </div>
                <div className='NotificationElapsedTime'>
                    <p>
                        <span id='Elapsed'>{props.elapsed}</span>
                        <span id='TypeDate'>{props.typeDate}</span> ago
                    </p>
                </div>
            </div>
        </div>
    );
}

export { Notification };
