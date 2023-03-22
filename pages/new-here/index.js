import React from "react";

const NewHere = () => {
  return (
    <div className="new-here page-marker">
      <h1>New Here? What to Expect</h1>
      <div className="card my-1">
        <div className="card-body">
          <div className="card-title">
            WHEN & WHERE is Honesdale Community Church Service?
          </div>
          <div className="card-text mb-2">
            Our Sunday service is at 9:30 am. We also meet for coffee beforehand
            at 9:00 am.
          </div>
          <div className="card-subtitle text-muted">Our address is</div>
          <div className="card-text">113 Church Street</div>
          <div className="card-text">Honesdale, PA 18431</div>
        </div>
      </div>
      <div className="card my-1">
        <div className="card-body">
          <div className="card-title">HOW LONG IS THE WORSHIP SERVICE?</div>
          <div className="card-text">Our worship service last about an hour.</div>
          <div className="card-text">
            Afterwards you're invited to stay for our Coffee Connection and
            enjoy fellowship, snacks and refreshments.
          </div>
        </div>
      </div>
      <div className="card my-1">
        <div className="card-body">
          <div className="card-title">WHAT SHOULD I WEAR?</div>
          <div className="card-text">
            Here at Honesdale Community Church we would like for you to come as
            you are. We mostly dress causal, but please feel free to wear what
            makes you comfortable.
          </div>
        </div>
      </div>
      <div className="card my-1">
        <div className="card-body">
          <div className="card-title">WHAT IS AVAILABLE FOR KIDS? </div>
          <div className="card-text mb-1">
            Honesdale Community Church has a program for children ages 5-11. It
            is a safe and engaging environment, where parents can feel free to
            leave their children during the church service. Our mission is to
            share the gospel with with children in an age appropriate manner
            while their parents participate in adult worship service.
          </div>
          <div className="card-text">
            We also have a "Cry Room" that you may take your infant or toddler
            to that is equipped with a live video feed of the sermon, a play
            area and is close to restrooms.
          </div>
        </div>
      </div>
      <div className="card my-1">
        <div className="card-body">
          <div className="card-title">
            CAN I ATTEND IF I'M _____________________?
          </div>
          <div className="card-text">
            You fill in the blank with any fear you might have about not being
            accepted. You belong here. So please come as you are, and we will
            see you on Sunday!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHere;
