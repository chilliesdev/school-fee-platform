import React from 'react'

// Components
import { Card, Button, List } from '../../components'

export default function Dashboard() {

  const transactionList = [
    { 
      id: 1,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
      button: "Invoice"
    },
    { 
      id: 2,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
      button: "Invoice"
    },
    { 
      id: 3,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
      button: "Invoice"
    },
    { 
      id: 4,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
      button: "Invoice"
    },
    { 
      id: 5,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
      button: "Invoice"
    },
  ]
  
  const withdrawList = [
    { 
      id: 1,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
    },
    { 
      id: 2,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
    },
    { 
      id: 3,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
    },
    { 
      id: 4,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
    },
    { 
      id: 5,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
    },
    { 
      id: 6,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
    },
    { 
      id: 7,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
    },
    { 
      id: 8,
      label: "STUDENT NAME", 
      additionalData: [ "$5,000", "10:00AM" ], 
    },
  ]

  const SubHeadings = props => <h5>{props.children}</h5>

  const WithdrawButton = () => <Button classes="xl">
    WITHDRAW
  </Button>

  const WithdrawalList = () => {
    return <div className="withdrawal-list">
      <SubHeadings>Withdrawals</SubHeadings>
      <List
        size="sm"
        card
        listItems={withdrawList}
      />
    </div>
  }

  const TransctionList = () => {
    return <div className="transaction-list">
      <div className="heading">
        <SubHeadings>Latest Transactions</SubHeadings>
        <Button classes="sm">MORE</Button>
      </div>
      <List
        listItems={transactionList}
        size="lg"
      />
    </div>
  }

  const Monitor = () => {
    return <div className="monitor">
      <SubHeadings>Transaction in Numbers</SubHeadings>
      <div className="card-group">
        <Card
          figure="&#8358;500,000"
          label="balance"
        />
        <Card
          figure="1000"
          label="all"
        />
        <Card
          figure="10"
          label="today"
        />
        <Card
          figure="50"
          label="this month"
        />
      </div>
    </div>
  }

  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <h1>Dashboard</h1>
        <WithdrawButton/>
      </div> 
      <div className="dashboard-container">
        <div className="grid lg">
          <Monitor/>
          <TransctionList/>
        </div>
        <div className="grid sm">
          <WithdrawalList/>
        </div>
      </div>
    </div>
  )
}