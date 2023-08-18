import React from 'react';
import Head from 'next/head';
import { getPrayerList } from '../../services';
import getContentFragment from '@/components/GetContentFragment';
import Link from 'next/link';

export default function PrayerRequest({ prayerList }) {
  return (
    <>
      <Head>
        <title>Prayer Requests</title>
      </Head>
      <div className='prayer-request page-marker'>
        <h2>Prayer Requests</h2>
        <div className='card mb-2 p-3'>
          {/* card-body is interfering with carriage return for some reason */}
          {/* <div className='card-body'> */}
          {prayerList.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
          {/* </div> */}
        </div>
        <div className='pt-3'>
          <button className='btn btn-info'>
            <Link className='black-link' href='/prayer-request-form'>
              Add a Prayer Request
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const prayerList = (await getPrayerList()) || [];
  return {
    props: { prayerList },
  };
}
