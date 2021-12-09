import React from 'react'

import styles from './props.module.css'

const Prop = ({
  icon,
  name,
  type,
  defaultValue,
  required = false,
  children,
}) => {
  return (
    <tr>
      <td className={styles.iconColumn}>{icon && <img src={`/img/icons/${icon}`} />}</td>
      <td className={styles.nameColumn}>{name}</td>
      <td className={styles.typeColumn}>{type && <code> {type} </code>}</td>
      <td className={styles.requiredColumn}>{ required && <img src={`/img/icons/required.png`} /> }</td>
      <td className={styles.defaultColumn}>{defaultValue && <code> {defaultValue} </code>}</td>
      <td className={styles.descriptionColumn}>{children}</td>
    </tr>
  )
}

export default Prop
