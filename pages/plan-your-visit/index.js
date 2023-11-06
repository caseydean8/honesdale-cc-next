import React from 'react';
import Head from 'next/head';
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
          text={`We know visiting a new church can be intimidating, that's why we have a greeting team who would love to meet you and show you around! We always welcome first-time visitors so feel free to say, “This is my first time” and we'll guide you in!`}
        />
        <Card
          title='Dress'
          text={`We care about YOU, not what you're wearing! We want you to feel welcome just as you are! Our dress code is simple: wear something.`}
        />
        <Card
          title='Food and Drink'
          text={`Grab a hot cup of free coffee from our Cafe and sit wherever you'd like. Coffee is allowed in the auditorium so make yourself at home!`}
        />
        <Card
          title='Kid-Friendly'
          text={`We strive to provide a safe environment for kids and families. There is a Childrens Church for ages 5-11 that will be dismissed before service.  Our mission is to share the gospel with children in an age appropriate manner while their parents participate in adult worship service. We also have a "Cry Room" that you may take your infant or toddler to, that is equipped with a live video feed of the sermon, a play area and is close to the restroom. All of our kids ministry volunteers must pass background checks and have a heart for kids and families.`}
        />
        <Card title='Accessibility'>
          <div className='card-text'>
            We are committed to being accessible to all. Please contact{' '}
            <Link href='mailto:joinus@honesdalecc.org' aria-label='send email'>
              JoinUs@HonesdaleCC.org
            </Link>{' '}
            so we can make any arrangements necessary for you to attend our services and events.
          </div>
        </Card>
        <Card title='For more questions'>
          <div className='card-text'>
            If you have any specific questions, email us at{' '}
            <Link href='mailto:joinus@honesdalecc.org' aria-label='send email'>
              JoinUs@HonesdaleCC.org
            </Link>{' '}
            and we hope to meet you this Sunday!
          </div>
        </Card>
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
