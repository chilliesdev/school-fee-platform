import React from 'react'

// components
import { 
  PageHeading, 
  PageHeader, 
  PageContent, 
  Button,
  Table,
} from '../../components'

export default function School() {

  const image = '/images/default-school-img.png'
  const head = ['picture', 'name', 'email', 'phone', 'account']
  const body = [
    { 
      id: 1,
      picture: image, 
      name: 'Student Name',
      items: [ 'example@email.com', '08012345678', '001234567' ], 
      button: 'edit' 
    },
    { 
      id: 2,
      picture: image, 
      name: 'Student Name',
      items: [ 'example@email.com', '08012345678', '001234567' ], 
      button: 'edit' 
    },
    { 
      id: 3,
      picture: image, 
      name: 'Student Name',
      items: [ 'example@email.com', '08012345678', '001234567' ], 
      button: 'edit' 
    },
    { 
      id: 4,
      picture: image, 
      name: 'Student Name',
      items: [ 'example@email.com', '08012345678', '001234567' ], 
      button: 'edit' 
    },
    { 
      id: 5,
      picture: image, 
      name: 'Student Name',
      items: [ 'example@email.com', '08012345678', '001234567' ], 
      button: 'edit' 
    },
    { 
      id: 6,
      picture: image, 
      name: 'Student Name',
      items: [ 'example@email.com', '08012345678', '001234567' ], 
      button: 'edit' 
    },
    { 
      id: 7,
      picture: image, 
      name: 'Student Name',
      items: [ 'example@email.com', '08012345678', '001234567' ], 
      button: 'edit' 
    },
    { 
      id: 8,
      picture: image, 
      name: 'Student Name',
      items: [ 'example@email.com', '08012345678', '001234567' ], 
      button: 'edit' 
    },
  ]


  return <div className="school">
    <PageHeader>
      <PageHeading>School</PageHeading>
      <Button classes="xl">Add School</Button>
    </PageHeader>
    <PageContent>
      <Table heading={head} body={body} search={{
        placeholder: "Search School"
      }} />
    </PageContent>
  </div>
  
}
