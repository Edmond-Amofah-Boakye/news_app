import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import NewsletterSignup from "@/components/news/NewsLetter";
import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import React from "react";
import CommentList from "@/components/news/Comments";
import CommentForm from "@/components/news/CommentForm";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="relative h-[300px] p-4">
        <div className="absolute inset-0 bg-slate-950 opacity-50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://cloudfront-us-east-2.images.arcpublishing.com/reuters/JLTVB73MERIZZFEFTOOTB52ZZM.jpg')] bg-no-repeat bg-cover z-0"></div>
        <div className="relative z-20 p-4">
          <h1 className="text-white text-6xl font-bold mb-10">THE VOICE</h1>
          <div className="flex justify-between items-center">
            <p className="text-white text-2xl font-bold mb-3">Detail News</p>
            <p className="text-[#f5f3f3] mb-4">
              <span className="mr-2">Politics |</span>
              <span className="mr-2">Detail news</span>
            </p>
          </div>
        </div>
      </div>
      <main className="py-5 px-10">
        <h3 className="font-bold text-4xl mb-4 text-center">
          Christmas Celebtared Around the World
        </h3>
        <div>
          <Image
            src="https://www.kids-world-travel-guide.com/images/xchristmas_kids_shutterstock_io.jpg.pagespeed.ic._msW6Zyveo.jpg"
            alt="user image"
            unoptimized
            width={200}
            height={160}
            sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>

        <p className="text-[#000000] mb-4 mt-8 text-[16px] font-bold flex items-center gap-4">
          <span className="mr-2 flex gap-1 items-center">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKUPmZPihoODvOLEaynPON5UcTl9tEX34SQ&s"
              alt="user image"
              width={50}
              height={50}
              unoptimized
              className="rounded-[25px]"
            />
            by <span className="text-red-500">John Doe </span>|
          </span>
          <span className="mr-2 flex gap-1 items-center">
            {" "}
            <CiClock2 /> 25 December, 2024 |
          </span>
          <span className="flex gap-1 items-center">
            <FaRegCommentDots />
            400 Comments
          </span>
        </p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea
          debitis quidem libero consequuntur laudantium totam sequi magni eius
          sit! Dolorem praesentium vitae tempora eum adipisci? Quos fugit hic
          repellendus culpa consequuntur inventore ullam, excepturi quasi
          accusantium ducimus quaerat veniam voluptate fugiat error corrupti
          facere eum eius dolore omnis molestiae.
        </p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea
          debitis quidem libero consequuntur laudantium totam sequi magni eius
          sit! Dolorem praesentium vitae tempora eum adipisci? Quos fugit hic
          repellendus culpa consequuntur inventore ullam, excepturi quasi
          accusantium ducimus quaerat veniam voluptate fugiat error corrupti
          facere eum eius dolore omnis molestiae.
        </p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea
          debitis quidem libero consequuntur laudantium totam sequi magni eius
          sit! Dolorem praesentium vitae tempora eum adipisci? Quos fugit hic
          repellendus culpa consequuntur inventore ullam, excepturi quasi
          accusantium ducimus quaerat veniam voluptate fugiat error corrupti
          facere eum eius dolore omnis molestiae.
        </p>
        <p className="mt-5 bg-black text-white text-3xl p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea
          debitis quidem libero consequuntur laudantium totam sequi magni eius
          sit! Dolorem praesentium vitae tempora eum adipisci? Quos fugit hic
          repellendus culpa consequuntur inventore ullam, excepturi quasi
          accusantium ducimus quaerat veniam voluptate fugiat error corrupti
          facere eum eius dolore omnis molestiae.
        </p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea
          debitis quidem libero consequuntur laudantium totam sequi magni eius
          sit! Dolorem praesentium vitae tempora eum adipisci? Quos fugit hic
          repellendus culpa consequuntur inventore ullam, excepturi quasi
          accusantium ducimus quaerat veniam voluptate fugiat error corrupti
          facere eum eius dolore omnis molestiae.
        </p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea
          debitis quidem libero consequuntur laudantium totam sequi magni eius
          sit! Dolorem praesentium vitae tempora eum adipisci? Quos fugit hic
          repellendus culpa consequuntur inventore ullam, excepturi quasi
          accusantium ducimus quaerat veniam voluptate fugiat error corrupti
          facere eum eius dolore omnis molestiae.
        </p>
        <div className="flex items-center justify-between gap-4 mt-9">
          <div>
            <Image
              src="https://www.usatoday.com/gcdn/presto/2018/12/25/USAT/e5366a7b-8e6e-46f9-85a9-b28b182a95e7-EPA_MOLDOVA_CHRISTMAS.jpg?width=700&height=512&fit=crop&format=pjpg&auto=webp"
              alt="user image"
              width={500}
              height={250}
              unoptimized
            />
          </div>
          <div>
            <Image
              src="https://cdn.shopify.com/s/files/1/1016/2961/articles/Christmas-Around-The-World-Globe-Lights.jpg?v=1691437308"
              alt="user image"
              width={500}
              height={300}
              unoptimized
            />
          </div>
          <div>
            <Image
              src="https://qph.cf2.quoracdn.net/main-qimg-9c51d3a50ec7cf38f0dd5e6ea9d5e220"
              alt="user image"
              width={500}
              height={300}
              unoptimized
            />
          </div>
        </div>
        <div className="w-full bg-gray-500 h-[1px] my-10"></div>
        <h1 className="font-bold text-xl">Top Comments</h1>
        <CommentList />
        <div className="w-full bg-gray-500 h-[1px] my-10"></div>
        <CommentForm />
        <div className="w-full bg-gray-500 h-[1px] my-10"></div>
      </main>

      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default page;
