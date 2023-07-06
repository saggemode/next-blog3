import React from 'react'
import Layout from '../../components/Layout'
import MetaTag from '../../components/MetaTag'

const postDetails = () => {
  return (
    <Layout >
    <MetaTag
      title={'Post'}
      description={'A Full Stack Developer who try to write technical blogs.'}
      siteUrl={'https://next-ecomtailwin.vercel.app/'}
      previewImage={'https://next-ecomtailwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnext-ecom-tailwind%2Fimage%2Fupload%2Fv1657406132%2Fppdbacwi02hqwbwhttjp.jpg&w=1920&q=75'}
    />
   <div className="pt-20">
   details
   </div>
  </Layout>
  )
}

export default postDetails