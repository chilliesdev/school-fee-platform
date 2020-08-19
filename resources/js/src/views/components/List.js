import React, { useState, useEffect } from "react"
import Button from "./Button"
import Loading from "./Loading"

// hooks
import { useSecureConnect } from "../../hooks"

export default function List({
  children,
  size,
  listItems,
  card,
  pagination,
  disableLoading = false
}) {
  // @pagingation object
  // pagination.status boolean
  // pagination.stucture function
  // pagination.loadMoreDistructure function
  // pagination.accessToken string

  const { get } = useSecureConnect()

  useEffect(() => {
    pagination && pagination.status
      ? Object.keys(listItems).length > 0 && mapListToPaginate(listItems)
      : setList(listItems)
  }, [listItems])

  const [list, setList] = useState([])
  const [paginationUrl, setPaginationUrl] = useState({
    current_page: "",
    last_page: "",
    next_page_url: "",
    prev_page_url: ""
  })
  const [loading, setLoading] = useState(false)

  function mapListToPaginate(toMap) {
    const { current_page, last_page, next_page_url, prev_page_url } = toMap

    const formattedData = pagination.structure(
      list.length > 0 ? list.concat(toMap.data) : toMap.data
    )

    setList(formattedData)
    // setUrl(next_page_url)
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
        const response = await get(
          paginationUrl.next_page_url,
          pagination.accessToken
        )
        // check if respons will be nested
        // if it will nested a disstructure function will be sent
        const moreData = pagination.loadMoreDistructure
          ? pagination.loadMoreDistructure(response.data)
          : response.data

        console.log(moreData)
        setLoading(false)
        mapListToPaginate(moreData)
      } catch ({ response }) {
        console.error(response)
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

  return (
    <ul
      onScroll={handleScroll}
      className={card ? "list-group list-card" : "list-group"}
    >
      {children}
      {list && list.length > 0 ? (
        list.map(({ id, label, additionalData, button }) => {
          return (
            <li className={`list-item ${size}`} key={id}>
              <div className="main">
                {label && <span className="label">{label}</span>}
                {button && <Button classes>{button}</Button>}
              </div>
              <div className="additional-data">
                {additionalData
                  ? additionalData.map((item, idx) => (
                      <span className="additional-data-item" key={idx}>
                        {item}
                      </span>
                    ))
                  : null}
              </div>
            </li>
          )
        })
      ) : // waiting for data loading screen
      disableLoading ? null : (
        <Loading color="primary" size="lg" relative />
      )}
      {loading && (
        // pagination loading
        <li className="loading-container">
          <Loading color="primary" size="md" relative />
        </li>
      )}
    </ul>
  )
}
