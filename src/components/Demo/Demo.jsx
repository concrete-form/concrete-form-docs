import React from 'react'
import CodeBlock from '@theme/CodeBlock'

import styles from './demo.module.css'

const DELIMITER_START = '___START___'
const DELIMITER_END = '___END___'

const Demo = ({
  Component,
  source,
  dense = false,
  hideCode = false,
}) => {
  source = source.replace(/import React from 'react'/, '')
  source = source.replace(/export default .*/, '')
  source = source.trim()

  /* primitive source exclusion in demos */
  /* todo : move this in doc utils and make it more robust */

  source = source.replace(/\{? ?\/\* ?exclude\-start ?\*\/ ?\}?/g, DELIMITER_START)
  source = source.replace(/\{? ?\/\* ?exclude\-end ?\*\/ ?\}?/g, DELIMITER_END)
  source = source.replace(new RegExp(`${DELIMITER_START}[^__]*${DELIMITER_END}`, 'igm'), '')

  return (
    <>
      {!hideCode && (
        <CodeBlock className={['language-jsx', styles.code].join(' ')}>
          { source.trim() }
        </CodeBlock>
      )}

      <div className={[
        'shadow--md',
          styles.result,
          dense ? styles.dense : '',
          hideCode ? styles.codeHidden : '',
        ].join(' ')}>
        <Component />
      </div>
    </>
  )
}

export default Demo
