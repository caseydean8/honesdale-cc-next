import React from 'react';
import Head from 'next/head';
// import Balancer from 'react-wrap-balancer';
import Card from 'components/Card';
import Video from 'components/Video';
import Link from 'next/link';

const PlanYourVisit = () => {
  return (
    <>
      <Head>
        <title>Plan Your Visit</title>
        <meta
          name='description'
          content='Discover when and where the Honesdale Community Church Sunday service is, our casual dress policy, and what is available for children.'
        />
      </Head>
      <div className='plan-your-visit page-marker'>
        <h2>Plan Your Visit</h2>
        {/* <h4>What to Expect</h4> */}
        <div className='px-3'>
          <p>
            Our services last right around an hour and consist of worship through music followed by
            a time of teaching. Pastor Tim teaches the Bible Line by Line in a way anyone can
            understand. Afterwards you're invited to stay for fellowship, snacks and refreshments.
          </p>
        </div>
        <Card
          title='Parking'
          text='We have handicap parking located near the entrance of our church building and guest parking marked spots.'
        />
        <Card
          title='Greeters'
          text='We know visiting a new church can be intimidating, that’s why we have a greeting team who would love to meet you and show you around! We always welcome first-time visitors so feel free to say, “This is my first time” and we’ll guide you in!'
        />
        <Card
          title='Dress'
          text='We care about YOU, not what you’re wearing! We want you to feel welcome just as you are! Our dress code is simple: wear something.'
        />
        <Card
          title='Food and Drink'
          text='Grab a hot cup of free coffee from our Cafe and sit wherever you’d like. Coffee is allowed in the auditorium so make yourself at home!'
        />
        <Card
          title='Kid-Friendly'
          text={`We strive to provide a safe environment for kids and families. There is a Children's’ Church for ages 5-11 that will be dismissed before service.  Our mission is to share the gospel with children in an age appropriate manner while their parents participate in adult worship service. We also have a "Cry Room" that you may take your infant or toddler to, that is equipped with a live video feed of the sermon, a play area and is close to the restroom. All of our kids ministry volunteers must pass background checks and have a heart for kids and families.`}
        />
        <Card title='Accessibility'>
          <div className='card-text'>
            We are committed to being accessible to all. Please contact{' '}
            <Link href='mailto:honesdalecc@gmail.com' aria-label='send email'>
              JoinUs@HonesdaleCC.org
            </Link>{' '}
            so we can make any arrangements necessary for you to attend our services and events.
          </div>
        </Card>
        <Card title='For more questions'>
          <div className='card-text'>
            If you have any specific questions, email us at{' '}
            <Link href='mailto:honesdalecc@gmail.com' aria-label='send email'>
              JoinUs@HonesdaleCC.org
            </Link>{' '}
            and we hope to meet you this Sunday!
          </div>
        </Card>
        {/* <Card
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
        /> */}
        <Card title='WHAT IS A CHRISTIAN?'>
          <div className='card-text mb-2 text-center'>Watch our ongoing series.</div>
          <Video
            src={
              'https://www.youtube-nocookie.com/embed/videoseries?list=PL2jfjxYwstKMFknJNTZS7GGWwcG48ht3z&rel=0&index=1'
            }
          ></Video>
        </Card>
      </div>
    </>
  );
};

export default PlanYourVisit;
