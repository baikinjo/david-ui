import * as React from 'react'
import { Link } from 'react-router-dom'
import { style } from 'typestyle'

const ToolbarMenuItem = (props) => {
  const { onClick, title, to } = props
  const menuItem = style({
    $nest: {
      '&:hover': { background: 'rgb(240,240,240)' }
    } 
  })
  
  return (
    <div className={ menuItem } >
      {
        (() => {
          if (to) {
            return <Link href={to} onClick={onClick}>{title}</Link>
          }
          return <span onClick={onClick}>{title}</span>
        })()
      }
    </div>
  )
}

export default ToolbarMenuItem