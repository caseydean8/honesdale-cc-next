import React from 'react';
import Head from 'next/head';
import Balancer from 'react-wrap-balancer';
import Card from 'components/Card';
import Video from 'components/Video';

const NewHere = () => {
  return (
    <>
      <Head>
        <title>New Here?</title>
        <meta
          name='description'
          content='Discover when and where our Sunday service is, our casual dress policy, and what is available for children.'
        />
      </Head>
      <div className='new-here page-marker'>
        <h2>New Here?</h2>
        <h4>What to Expect</h4>
        <Card
          title={<Balancer>WHEN & WHERE is the Honesdale Community Church Service?</Balancer>}
          text='Our Sunday service is at 9:30 am. We meet for coffee beforehand at 9:00 am.'
        >
          <div>Our address is</div>
          <div>1113 Church Street</div>
          <div>Honesdale, PA 18431</div>
        </Card>
        <Card
          title='HOW LONG IS THE WORSHIP SERVICE?'
          text="Our worship service lasts about an hour. Afterwards you're invited to stay for
              fellowship, snacks and refreshments."
        />
        <Card
          title='WHAT SHOULD I WEAR?'
          text='Here at Honesdale Community Church we would like for you to come as you are. We mostly
              dress causal, but please feel free to wear what makes you comfortable.'
        />
        <Card
          title='WHAT IS AVAILABLE FOR KIDS?'
          text={`Honesdale Community Church has a program for children ages 5-11. It is a safe and engaging environment where parents can feel free to leave their children during the church service. Our mission is to share the gospel with with children in an age appropriate manner while their parents participate in adult worship service.\nWe also have a "Cry Room" that you may take your infant or toddler to that is equipped with a live video feed of the sermon, a play area and is close to restroom.`}
        />
        <Card
          title="CAN I ATTEND IF I'M _____________________?"
          text='You fill in the blank with any fear you might have about not being accepted. You
              belong here. So please come as you are, and we will see you on Sunday!'
        />
        <Card title='WHAT IS A CHRISTIAN?'>
          <div className='card-text mb-2 text-center'>Watch our ongoing series.</div>
          <Video src={'https://www.youtube-nocookie.com/embed/ENgmOZvaFMs'}></Video>
        </Card>
      </div>
    </>
  );
};

export default NewHere;
