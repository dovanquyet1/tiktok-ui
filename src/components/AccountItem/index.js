import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tiktok-obj/bde0d542ad0c559ff67015e13369e03c~c5_300x300.webp?x-expires=1682506800&x-signature=h6NxQjaWbdgC5Cu%2B7UPKA5fc9tg%3D"
                alt="Ha"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dang Thu Ha</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>dangthuha</span>
            </div>
        </div>
    );
}

export default AccountItem;
