import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import DashboardPage from './DashboardPage/DashboardPage';
import Footer from './UI/Footer/Footer';
import AppBar from './UI/AppBar/AppBar';
import AppRoutes from '../constants/routes';
import YesNoPage from './FunctionPages/YesNoPage/YesNoPage';
import PickFromListPage from './FunctionPages/PickFromListPage/PickFromListPage';
import OrderListPage from './FunctionPages/OrderListPage/OrderListPage';
import RandomNumberPage from './FunctionPages/RandomNumberPage/RandomNumberPage';
import DicePage from './FunctionPages/DicePage/DicePage';

/**
 * App component
 * Represent the main component of the application
 *
 * @returns React component
 */
const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <AppBar />
      </header>
      <section className={styles.body}>
        <Routes>
          <Route path={AppRoutes.YesNo} element={<YesNoPage />} />
          <Route path={AppRoutes.RandomNumber} element={<RandomNumberPage />} />
          <Route path={AppRoutes.OrderList} element={<OrderListPage />} />
          <Route path={AppRoutes.PickFromList} element={<PickFromListPage />} />
          <Route path={AppRoutes.Dice} element={<DicePage />} />
          <Route path="*" element={<DashboardPage />} />
        </Routes>
      </section>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
