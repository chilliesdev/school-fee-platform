import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import Button from "./Button"
import Input from "./Input"
import Loading from "./Loading"

import { useSecureConnect } from "../../hooks"

export default function Table({ heading, body, search, url, pagination }) {
  // @pagingation object
  // pagination.status boolean
  // pagination.stucture function
  // pagination.loadMoreDistructure function
  // pagination.accessToken string

  const { get } = useSecureConnect()

  const history = useHistory()

  useEffect(() => {
    pagination && pagination.status
      ? Object.keys(body).length > 0 && mapBodyToPaginate(body)
      : setTableBody(body)
  }, [body])

  const [tableBody, setTableBody] = useState([])
  const [paginationUrl, setPaginationUrl] = useState({
    current_page: "",
    last_page: "",
    next_page_url: "",
    prev_page_url: ""
  })
  const [loading, setLoading] = useState(false)

  function mapBodyToPaginate(toMap) {
    const { current_page, last_page, next_page_url, prev_page_url } = toMap

    const formattedData = pagination.structure(toMap.data)

    if (toMap.refresh) {
      setTableBody(formattedData)
    } else {
      setTableBody(tableBody.concat(formattedData))
    }

    setPaginationUrl({
      current_page: current_page,
      last_page: last_page,
      next_page_url: next_page_url,
      prev_page_url: prev_page_url
    })
  }

  function loadMore() {
    const requestNextPage = async () => {
      try {
        const { data } = await get(
          paginationUrl.next_page_url,
          pagination.accessToken
        )
        setLoading(false)
        mapBodyToPaginate({ ...data, refresh: false })
      } catch (error) {
        console.error(error)
        console.error(error.response)
      }
    }

    // it will not request more if it is at the last page
    if (paginationUrl.current_page != paginationUrl.last_page) {
      setLoading(true)
      requestNextPage()
    }
  }

  function handleScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
    bottom && loadMore()
  }

  const verifyDataSent = () => {
    return Object.keys(body).length > 0
      ? body.data.length > 0
        ? true
        : null
      : false
  }

  const Row = ({ children, addClass }) => (
    <tr className={addClass}>{children}</tr>
  )

  const Head = ({ heading, search }) => {
    return (
      <thead>
        <Row>
          {heading
            ? heading.map((heading, idx) => <th key={idx}>{heading}</th>)
            : null}
          {search && (
            <th className="table-search">
              <Input rounded placeholder={search.placeholder} />
            </th>
          )}
        </Row>
      </thead>
    )
  }

  return (
    <table>
      <Head heading={heading} search={search} />
      <tbody onScroll={handleScroll}>
        {verifyDataSent() ? (
          tableBody.map(({ id, name, picture, items, button, addClass }) => (
            <Row key={id} addClass={addClass}>
              {picture && (
                <td className="table-picture-wrapper">
                  <img className="table-picture" src={picture} />
                </td>
              )}
              {name && <td className="table-name">{name}</td>}
              {items && items.map((item, idx) => <td key={idx}>{item}</td>)}
              {button && (
                <td className="table-button">
                  <Button action={() => history.push(url + id + "/edit")}>
                    {button}
                  </Button>
                </td>
              )}
            </Row>
          ))
        ) : verifyDataSent() === null ? (
          <tr className="table-loading-row">
            <td className="table-loading-data">No Data</td>
          </tr>
        ) : (
          <tr className="table-loading-row">
            <td className="table-loading-data">
              <Loading color="primary" size="md" relative />
            </td>
          </tr>
        )}
        {loading && (
          <tr className="table-loading-row">
            <td className="table-loading-data">
              <Loading color="primary" size="md" relative />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
