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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          mollitia at minus incidunt ipsum ullam quae veniam sunt nesciunt vero
          facilis doloribus reiciendis officiis. Quia dolor debitis magni non
          quis?
        </p>
      </section>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
