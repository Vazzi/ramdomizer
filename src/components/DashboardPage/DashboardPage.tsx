import React from 'react';
import DashboardButton from './DashboardButton/DashboardButton';
import styles from './DashboardPage.module.scss';

import Routes from '../../constants/routes';
import Header from '../UI/Header/Header';
import { useIntl } from 'react-intl';
import messages from './messages';

/**
 * Dashboard page
 * Represent the component where is the list of links to all function pages
 *
 * @returns React component
 */
const DashboardPage: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <DashboardButton
          title={formatMessage({ ...messages.yesNoTitle })}
          linkTo={Routes.YesNo}
        />
        <DashboardButton
          title={formatMessage({ ...messages.randomNumberTitle })}
          linkTo={Routes.RandomNumber}
        />
        <DashboardButton
          title={formatMessage({ ...messages.orderListTitle })}
          linkTo={Routes.OrderList}
        />
        <DashboardButton
          title={formatMessage({ ...messages.pickFromListTitle })}
          linkTo={Routes.PickFromList}
        />
        <DashboardButton
          title={formatMessage({ ...messages.rollTheDiceTitle })}
          linkTo={Routes.Dice}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
