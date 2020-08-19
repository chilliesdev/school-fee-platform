import React from "react"

const Image = (props) => <img {...props} className="service-card-img" />

const Text = ({ heading, text }) => (
  <div className="service-card-text">
    <h3>{heading}</h3>
    <p>{text}</p>
  </div>
)

const AlignLeft = (props) => (
  <>
    <Text {...props} />
    <Image src={props.image} />
  </>
)

const AlignRight = (props) => (
  <>
    <Image src={props.image} />
    <Text {...props} />
  </>
)

export default function Card(props) {
  return (
    <div className={`service-card align-${props.align}`}>
      {props.align === "right" ? (
        <AlignRight {...props} />
      ) : (
        <AlignLeft {...props} />
      )}
    </div>
  )
}
