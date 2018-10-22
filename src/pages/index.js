import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Avatar from '../components/avatar'
import face from '../images/face.png'

const IndexPage = () => (
  <Layout>
    {/* <a href="http://urban-waffle.willingram.com">urban-waffle</a> */}
    <div style={{ marginTop: '150px' }}>
      <Avatar face={face} />
    </div>
  </Layout>
)

export default IndexPage
