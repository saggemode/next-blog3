/* eslint-disable @next/next/no-img-element */
//import { useContext } from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";



export default function Home() {
  
  return (
    <Layout>
      <div className="pt-20">
        <BlogCard />
      </div>
    </Layout>
  );
}


