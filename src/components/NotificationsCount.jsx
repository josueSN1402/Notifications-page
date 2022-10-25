import '../scss/components/NotificationsCount.scss';

function NotificationsCount({ count }) {
    return (
        <div className='NotificationsCount d-grd'>
            <span id='Count'>{count}</span>
        </div>
    );
}

export { NotificationsCount };
