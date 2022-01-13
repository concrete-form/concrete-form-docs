import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
// import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="docs/">
            Get Started !
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const docUrl = useBaseUrl('/docs');

  useEffect(() => {
    /* Temporarily redirecting to the doc until the home page is finished */
    window.location.href = docUrl
  }, [])

  const {siteConfig} = useDocusaurusContext();
  // return (
  //   <Layout
  //     // title={siteConfig.title}
  //     description={siteConfig.tagline}>
  //     <HomepageHeader />
  //     <main>
  //       {/* <HomepageFeatures /> */}
  //     </main>
  //   </Layout>
  // );
  return null
}
