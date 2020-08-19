import React from "react"

// components
import { PageContent, SubHeading, List } from "../../components"

// hooks
import { useThousand } from "../../../hooks"

export default function Profile({ userDetails }) {
  const { name, email, picture, address, fees } = userDetails

  const formatFee = () => {
    let tempFee = []
    fees &&
      fees.map(({ id, name, amount }) => {
        let temp = {
          id: "",
          label: "",
          additionalData: []
        }
        temp.id = id
        temp.label = name
        temp.additionalData.push("₦" + useThousand(amount))

        tempFee.push(temp)
      })
    return tempFee
  }

  return (
    <div className="profile">
      <PageContent>
        <div className="profile-container">
          <div className="grid">
            <SubHeading>Picture</SubHeading>
            <img
              src={
                picture
                  ? "/storage/" + picture
                  : "/images/default-school-img.png"
              }
            />
          </div>
          <div className="grid">
            <SubHeading>Details</SubHeading>
            <h3>{name}</h3>
            <p style={{ fontWeight: "bold" }}>{email}</p>
            <p>{address}</p>
          </div>
          <div className="grid">
            <SubHeading>Fees</SubHeading>
            <List size="sm" card listItems={formatFee()} />
          </div>
        </div>
      </PageContent>
    </div>
  )
}
