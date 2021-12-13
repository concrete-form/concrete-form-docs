import React from 'react'

import styles from '../Props/props.module.css'

const Prop = ({
  name,
  type,
  children,
}) => {
  return (
    <tr>
      <td className={styles.nameColumn}>{name}</td>
      <td className={styles.typeColumn}>{type && <code> {type} </code>}</td>
      <td className={styles.descriptionColumn}>{children}</td>
    </tr>
  )
}

export default Prop
