<<<<<<< HEAD
import React from 'react'
import styles from './MainLayout.module.css'
import { Header, Footer } from '../../components'

export const MainLayout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			{/* 页面内容 content */}
			<div className={styles['page-content']}>{children}</div>
			<Footer />
		</>
	)
}
=======
import React from "react";
import styles from "./MainLayout.module.css";
import { Header, Footer } from "../../components";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>{children}</div>
      <Footer />
    </>
  );
};
>>>>>>> 0185803b3109c0c839bfdeecb21dcc88507afbd1
