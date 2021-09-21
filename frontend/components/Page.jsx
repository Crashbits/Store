import PropTypes from 'prop-types'

export default function Page({ children }) {
  return [children]
}

Page.PropTypes = {
  children: PropTypes.any,
}
