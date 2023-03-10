import Head from "next/head";
import Image from "next/image";
import SevenHandsLogo from "../public/seven-hands-crop.webp";
import { WazeMap } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>HCC-Dev-Tab</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid p-0">
        <div className="container home mb-5 px-4">
          <div className="clopper"></div>
          <Image
            src={SevenHandsLogo}
            alt="seven hands around the cross"
            width="300"
            height="300"
            priority
          />
          <h1>Sunday Worship Service 9:30am</h1>
          <button className="btn btn-info mb-2">New Here?</button>
          <h3 className="pb-2">We saved a seat for you!</h3>
          <h4>
            We hope you will see we are not your ordinary traditional church. We
            don't care what you are wearing, how many tattoos you have, or even
            what political party you support. But we do care about you! We are
            not perfect people, we are all broken in some way and coming to know
            Jesus. You don't have to know a secret handshake or any religious
            rituals to join our service. We just study the bible line-by-line,
            verse-by-verse, in a way anyone can understand. We want something
            for you, not something from you. We hope you will call this your
            home, become part of our family, and join our mission!
          </h4>
          <div className="mt-4">
            <h3>1113 Church Street</h3>
            <h3>Honesdale, PA 18472</h3>
          </div>
          <div className="handicap mt-4">
            <Image
              src="Wice_Wheelchair.svg"
              alt="wheelchair icon"
              width={40}
              height={40}
            />
            <p>
              We are committed to being accessible to all. Please contact us so
              we can make any arrangements necessary for you to attend our
              services and events. [Insert ??Email/phone]
            </p>
          </div>
        </div>
        <WazeMap />
      </div>
    </>
  );
}
