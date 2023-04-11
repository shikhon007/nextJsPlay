import '@/styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import Nav from '@/components/navbar/Nav';
import Footer from '@/components/footer/Footer';
import Sidebar from '@/components/sidebar/Sidebar';


export default function App({ Component, pageProps }: AppProps) {

  // const router = useRouter();
  // const { pathname } = router;
  // const noNav = ['/'];

  // console.log(pathname)

  // return (
  //   <>
  //     {noNav.includes(pathname) ? null : <Nav />}
  //     <div className='flex'>
  //       {noNav.includes(pathname) ? null : <Sidebar />}
  //       <Component {...pageProps} />
  //     </div>
  //     {noNav.includes(pathname) ? null : <Footer />}
  //   </>

  // );

  // @ts-ignore
  if (Component.getLayout) {
    return <Component {...pageProps} />
  }


  return (
    <>
      <Nav />
      <div className='flex'>
        <Sidebar />
        <Component {...pageProps} />
      </div>
      {/* <Footer /> */}
    </>
  )
}
