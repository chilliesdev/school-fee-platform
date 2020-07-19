import React from 'react'

import Input from './Input'
import Button from './Button'

import { FaSearch } from 'react-icons/fa'

export default props => <form>
  <Input
    placeholder="YOUR SCHOOL NAME"
    icon={<FaSearch/>}
    size="lg"
  />
  <Input
    label="Full Name"
    placeholder="YourName YourSurname"
  />
  <Input
    label="Class"
    placeholder="Eg. Primary 5"
  />
  <Input
    label="Email"
    placeholder="Eg. example@example.com"
  />
  <Button/>
</form>