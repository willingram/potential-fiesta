import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Avatar from '../components/avatar'
import MyLink from '../components/myLink'
import face from '../images/face.png'

const IndexPage = () => (
  <Layout>
    {/* <a href="http://urban-waffle.willingram.com">urban-waffle</a> */}
    <div style={{ marginTop: '150px' }}>
      <Avatar face={face} />
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '50px',
        }}
      >
        <MyLink link="http://urban-waffle.willingram.com">UW</MyLink>
        {/* <MyLink />
        <MyLink /> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
