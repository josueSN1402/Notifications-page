import '../scss/components/Notification.scss';

function Notification(props) {
    return (
        <div className='Notification d-grd'>
            <img src={props.avatar} alt={`Avatar ${props.name}`} className='NotificationAvatar' />
            <div className='NotificationBody'></div>
        </div>
    );
}

export { Notification };
