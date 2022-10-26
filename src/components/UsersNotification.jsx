import { Users } from './Users';
import PublishedPhoto from '../assets/images/image-chess.webp';

const notificationType = {
    d: 'Default',
    f: 'Followed',
    g: 'Group',
    m: 'Message',
    p: 'Picture',
};

class DefaultNotification {
    constructor(
        name,
        avatar,
        description,
        theme,
        elapsed,
        type = notificationType.d,
        read = false
    ) {
        this.type = type;
        this.name = name;
        this.avatar = avatar;
        this.description = description;
        this.theme = theme;
        this.read = read;
        this.elapsed = elapsed;
    }
}

class SecondNotification {
    constructor(type, name, avatar, elapsed, read = false, description) {
        this.type = type;
        this.name = name;
        this.avatar = avatar;
        this.elapsed = elapsed;
        this.read = read;
        this.description = description;
    }
}

class MessageNotification {
    constructor(
        name,
        avatar,
        message,
        elapsed,
        read = false,
        description,
        type = notificationType.m
    ) {
        this.type = type;
        this.name = name;
        this.avatar = avatar;
        this.description = description;
        this.message = message;
        this.read = read;
        this.elapsed = elapsed;
    }
}

class PictureNotification {
    constructor(
        name,
        avatar,
        picture,
        elapsed,
        read = false,
        description,
        type = notificationType.p
    ) {
        this.type = type;
        this.name = name;
        this.avatar = avatar;
        this.picture = picture;
        this.elapsed = elapsed;
        this.read = read;
        this.description = description;
    }
}

const UsersNotification = [
    new DefaultNotification(
        Users[0].name,
        Users[0].avatar,
        'reacted to your recent post',
        'My first tournament today!',
        1
    ),
    new SecondNotification(
        notificationType.f,
        Users[1].name,
        Users[1].avatar,
        1
    ),
    new DefaultNotification(
        Users[2].name,
        Users[2].avatar,
        'has joined tour group',
        'Chess Club',
        1,
        notificationType.g
    ),
    new MessageNotification(
        Users[3].name,
        Users[3].avatar,
        `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
        5,
        true
    ),
    new PictureNotification(
        Users[4].name,
        Users[4].avatar,
        PublishedPhoto,
        1,
        true
    ),
    new DefaultNotification(
        Users[5].name,
        Users[5].avatar,
        'reacted to your recent post',
        '5 end-game strategies to increase your win rate',
        2,
        notificationType.d,
        true
    ),
    new DefaultNotification(
        Users[6].name,
        Users[6].avatar,
        'left the group',
        'Chess Club',
        2,
        notificationType.g,
        true
    ),
];

export { UsersNotification };
