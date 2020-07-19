import React from 'react'

import Texts from './Texts'
import Cards from './Cards'

export default props => <section className="services">
    <Texts/>
    <div className="card-group">
      <Cards 
        image="images/ill1.png"
        heading="Fast Payments"
        text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print."
      />
      <Cards 
        image="images/ill2.png"
        heading="Great Pricing"
        text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print."
      />
      <Cards 
        image="images/ill3.png"
        heading="24/7 Customer Care"
        text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print."
      />
    </div>
</section>