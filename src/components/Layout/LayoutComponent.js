import * as React from 'react'
import { ScrollElement } from 'react-scroll'

const LayoutComponent = ({ children, parentBindings, ...props }) => (
  <article
    ref={el => parentBindings.domNode = el}
    {...props}
  >
    {children}
  </article>
)

export default ScrollElement(LayoutComponent)

