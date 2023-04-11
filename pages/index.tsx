import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import Play from '@/components/playground/Play'
import { ReactElement, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


const Home = () => {


  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard")
  }



  return (
    <>
      <div className=''>
        <input className=' border' type="text" placeholder='Enter Your name' />
        <input className=' border' type="text" placeholder='Enter your value' />
        <button onClick={handleClick}>submit</button>
      </div>

      {/* <Play /> */}

    </>
  )
}

export default Home;

Home.getLayout = function PageLayout(page: ReactElement) {

  return (
    <>
      {page}
    </>
  )

}

export async function getServerSideProps(context: any) {

  const val = [1, 2, 3, 4]

  return {
    props: { val }, // will be passed to the page component as props
  }
}
