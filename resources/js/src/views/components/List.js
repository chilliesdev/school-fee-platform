import React from 'react'
import Button from './Button'

export default function List({
  size,
  listItems,
  card,
}) {
  return (
    <ul className={card ? "list-group list-card" : "list-group"}>
      {listItems 
      ? listItems.map(({id, label, additionalData, button}) => {
          return <li className={`list-item ${size}`} key={id}>
            {label && <span className="label">{label}</span>}
            <span className="additional-data">
              {additionalData
              ? additionalData.map((item, idx) => 
                <span className="additional-data-item" key={idx}>{item}</span>)
              : null}
            </span>
            {button && <Button classes>{button}</Button>}
          </li>
        }
      )
      : null}
    </ul>
  )
}
