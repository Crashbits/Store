/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'
import Header from './Header'

export default function Page({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

Page.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.any,
}
