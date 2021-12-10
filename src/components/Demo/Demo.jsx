import React from 'react'
import CodeBlock from '@theme/CodeBlock'

import styles from './demo.module.css'

const Demo = ({ Component, source }) => {

  source = source.replace(/import React from 'react'/, '')
  source = source.replace(/export default .*/, '')
  source = source.trim()

  return (
    <>
      <CodeBlock className={['language-jsx', styles.code].join(' ')}>
        { source.trim() }
      </CodeBlock>

      <div className={['shadow--md', styles.result].join(' ')}>
        <Component />
      </div>
    </>
  )
}

export default Demo
