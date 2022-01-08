import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The most common form controls implemented with <strong>your favorite form library</strong>, no boilerplate.
      </>
    ),
  },
  {
    title: 'Easy to test',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Testing your forms with Concrete form is <strong>EASY</strong> and <strong>FUN</strong>.
      </>
    ),
  },
  {
    title: 'Fully customizable',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The rendering is higly customizable and follow the UI kits best practices.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
