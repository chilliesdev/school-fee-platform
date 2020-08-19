import React from "react"

import Texts from "./Texts"
import Cards from "./Cards"

export default function Service() {
  return (
    <section className="services" id="services">
      <Texts />
      <div className="services-card-group">
        <Cards
          align="left"
          image="images/ill1.png"
          heading="Fast Payments"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Cards
          align="right"
          image="images/ill2.png"
          heading="Great Pricing"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Cards
          align="left"
          image="images/ill3.png"
          heading="24/7 Customer Care"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
    </section>
  )
}
