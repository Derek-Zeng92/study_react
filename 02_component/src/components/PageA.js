import React, { Component } from 'react'
import { withAdminAuth } from "../HOC/withAdminAuth";
@withAdminAuth('admin')
class PageA extends Component {
  render() {
    return (
      <div>
        <h2>PageA页面的内容</h2>
      </div>
    )
  }
}
export default PageA
