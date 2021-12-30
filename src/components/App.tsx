import React from 'react';

import styles from './App.module.scss';
import DashboardPage from './DashboardPage/DashboardPage';
import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <section className={styles.body}>
        <DashboardPage />
      </section>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
