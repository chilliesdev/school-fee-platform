import React from 'react'

import Button from './Button'
import Input from './Input'

export default function Table({ 
  heading, 
  body,
  search,
}) {

  const Row = ({ children }) => <tr>{children}</tr>
  
  const Head = ({ heading, search }) => {
    return <thead>
      <Row>
        {heading 
        ? heading.map(( heading, idx ) =>
          <th key={idx}>{heading}</th>): 
        null}
        {search && <th className="table-search">
          <Input
            rounded
            placeholder={search.placeholder}
          />
        </th>}
      </Row>
    </thead>
  }

  const Body = ({ body }) => {
    return <tbody>
      {body 
      ? body.map(({ id, name, picture, items, button }) => <Row key={id}>
          {picture && <td className="table-picture-wrapper">
            <img className="table-picture" src={picture} />  
          </td> }
          {name && <td className="table-name">{name}</td>}
          {items && items.map( (item, idx) => <td key={idx}>{item}</td> )}
          {button && <td className="table-button">
            <Button>{button}</Button>
          </td>}
        </Row>)
      : null}
    </tbody>
  }

  return (<table>
      <Head heading={heading} search={search} />
      <Body body={body} />
    </table>
  )
}
