import React from 'react'

const Html5DocLink = ({ element }) => {
  return (
    <div style={{ marginBottom: '.75rem' }}>
      <img src="/img/icons/html5.png" alt="HTML5" style={{ width: 20, marginRight: '0.5rem' }} />
      <a href={`/docs/controls/html5/api#${element}-`} style={{ fontSize: '1.3rem', }}>HTML5 Documentation and examples</a>
    </div>
  )
}

export default Html5DocLink
