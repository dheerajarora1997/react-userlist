/**
 * This component is for common layout use for whole App
 */

import React from "react"
import Header from "../header"
import Footer from "../footer"

const CommonLayout = ({
  header = true,
  footer = true,
  children,
  pageHead = ""
}) => {

  return (
    <div className={`unipe-main`}>
      {header && <Header />}
      {pageHead && <div className="page-head py-2 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="h4 text-primary m-0 font-weight-bold">{pageHead}</h1>
            </div>
          </div>
        </div>
      </div>
      }
      <div className="unipe-inn py-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {children}
            </div>
          </div>
        </div>
      </div>
      {footer && <Footer />}

    </div>
  )
}

export default CommonLayout
