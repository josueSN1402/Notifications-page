import '../../scss/layout/ContainerHeader.scss';

function ContainerHeader() {
    return (
        <div className='ContainerHeader d-flx j-between'>
            <div className='ContainerTitle d-flx'>
                <h1 className='Title m-0'>Notifications</h1>
            </div>
            <button className='MarkNotifications m-0'>Mark all as read</button>
        </div>
    );
}

export { ContainerHeader };
