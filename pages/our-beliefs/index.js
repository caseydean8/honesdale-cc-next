import React from "react";
import Head from "next/head";
import Image from "next/image";
import ReadingScriptures from "public/over-shoulder-scriptures.webp";

const OurBeliefs = () => {
  return (
    <>
      <Head>
        <title>Our Beliefs</title>
      </Head>
      <div className="our-beliefs page-marker">
        <h2>Our Beliefs</h2>
        <Image
          src={ReadingScriptures}
          alt="reading scriptures"
          className="img-fluid rounded"
          priority
        />
        <div className="card my-2">
          <div className="card-body">
            <div className="card-title">About the Scriptures</div>
            <div className="card-text">
              We believe the entire Bible is the inspired Word of God and that
              men were moved by the Spirit of God to write the very words of
              Scripture. Therefore, we believe the Bible is without error.
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <div className="card-title">About God</div>
            <div className="card-text">
              We believe in one God who exists in three distinct persons:
              Father, Son and Holy Spirit. We believe that Jesus is the second
              member of the Trinity (the Son of God) who became flesh to reveal
              God to humanity and to become the Savior of the lost world.
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <div className="card-title">About Humanity</div>
            <div className="card-text">
              We believe all people were created in the image of God to have
              fellowship with him but became alienated in that relationship
              through sinful disobedience. As a result, people are incapable of
              regaining a right relationship with God through their own efforts.
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <div className="card-title">About Salvation</div>
            <div className="card-text">
              We believe that the blood of Jesus Christ, shed on the cross,
              provides the sole basis for the forgiveness of sin. Therefore, God
              freely offers salvation to those who place their faith in the
              death and resurrection of Christ as sufficient payment for their
              sin.
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <div className="card-title">About the Christian Life</div>
            <div className="card-text">
              We believe all Christians should live for Christ and not for
              themselves. By obedience to the Word of God and daily yielding to
              the Spirit of God, every believer should mature and be conformed
              to the image of Christ.
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <div className="card-title">About the Church</div>
            <div className="card-text">
              ​We believe that the church is the body of Christ, of which Christ
              is the head. The members of the church are those who have trusted
              by faith in the finished work of Christ. The purpose of the church
              is to glorify God by loving him and making him known to the lost
              world.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBeliefs;
