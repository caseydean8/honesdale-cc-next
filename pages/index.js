import Head from 'next/head';
import Image from 'next/image';
import SevenHandsLogo from '../public/seven-hands-crop.webp';
import { WazeMap } from '../components';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name='description'
          content='Homepage for Honesdale Community Church with service hours, address and map.'
        />
      </Head>
      <div className='page-marker'>
        {/* div added for possible "jumbotron" styling edits for mobile */}
        <div>
          <div className='px-4'>
            <h1 className='pb-1'>
              <Balancer>You Belong Here</Balancer>
            </h1>
            <Image
              src={SevenHandsLogo}
              alt='seven hands around the cross'
              width='300'
              height='300'
              priority
            />
            <h2 className='pt-3 pb-2 fw-400'>
              <Balancer>
                Experience God in a real way while being part of a strong community
              </Balancer>
            </h2>
            <button className='btn btn-info mb-3'>
              <Link href='/plan-your-visit' className='black-link'>
                Plan your visit
              </Link>
            </button>
            <h3 className='pb-2'>Sunday Worship Service 9:30am</h3>
          </div>
        </div>
        <h5 className='home-page-text'>
          We hope you will see we are not your traditional church. We don't care what you are
          wearing, how many tattoos you have, or even what political party you support. But we do
          care about you! We are not perfect people, we are all broken in some way and coming to
          know Jesus. You don't have to know a secret handshake or any religious rituals to join our
          service. We just study the bible line-by-line, verse-by-verse, in a way anyone can
          understand. We want something for you, not something from you. We hope you will call this
          your home, become part of our family, and join our mission!
        </h5>
        <div className='mt-4'>
          <h3>1113 Church Street</h3>
          <h4 className='fw-400'>Honesdale, PA 18472</h4>
        </div>
        <div className='handicap mt-4'>
          <Image src='Wice_Wheelchair.svg' alt='wheelchair icon' width={40} height={40} />
          <p>
            We are committed to being accessible to all. Please contact us so we can make any
            arrangements necessary for you to attend our services and events.
          </p>
        </div>
        <WazeMap />
        <div className='matthew-18-20 p-3 row'>
          <p>
            <Balancer>
              For where two or three have gathered together in My name, I am there in their midst.
            </Balancer>
            <br></br>
            Matthew 18:20
          </p>
        </div>
      </div>
    </>
  );
}
