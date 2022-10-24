import '../scss/components/Notification.scss';

function Notification(props) {
    return (
        <div className={`Notification d-flx ${!props.read ? 'Notification-Unread' : ''}`}>
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
                        <span className='NotificationName'>{props.name}</span>
                        &nbsp;
                        <span className='NotificationDescription'>
                            {props.description}
                        </span>
                        &nbsp;
                        <span className='theme'>{props.theme}</span>
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
