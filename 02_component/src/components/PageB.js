import React, { Component } from 'react'
import { withAdminAuth } from "../HOC/withAdminAuth";
@withAdminAuth('','vip')
class PageB extends Component {
  render() {
    return (
      <div>
        <h2>PageB页面的内容</h2>
      </div>
    )
  }
}
export default PageB
