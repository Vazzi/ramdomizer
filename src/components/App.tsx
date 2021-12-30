import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import DashboardPage from './DashboardPage/DashboardPage';
import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer';
import AppRoutes from '../constants/routes';
import YesNoPage from './Functions/YesNoPage/YesNoPage';
import PickFromListPage from './Functions/PickFromListPage/PickFromListPage';
import OrderListPage from './Functions/OrderListPage/OrderListPage';
import RandomNumberPage from './Functions/RandomNumberPage/RandomNumberPage';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <section className={styles.body}>
        <Routes>
          <Route path={AppRoutes.YesNo} element={<YesNoPage />} />
          <Route path={AppRoutes.RandomNumber} element={<RandomNumberPage />} />
          <Route path={AppRoutes.OrderList} element={<OrderListPage />} />
          <Route path={AppRoutes.PickFromList} element={<PickFromListPage />} />
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
