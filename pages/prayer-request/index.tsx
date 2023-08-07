import React from 'react';
import Head from 'next/head';
import { getPrayerList } from '../../services';
import getContentFragment from '@/components/GetContentFragment';

export default function PrayerRequest({ prayerList }) {
  return (
    <>
      <Head>
        <title>Prayer Requests</title>
      </Head>
      <div className='prayer-request page-marker'>
        <h2>Prayer Requests</h2>
        {prayerList.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
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
