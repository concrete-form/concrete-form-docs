import React from 'react'

import styles from './props.module.css'

const Divider = () => {
  return (
    <tr className={styles.divider}>
      <td colSpan="6"></td>
    </tr>
  )
}

export default Divider
