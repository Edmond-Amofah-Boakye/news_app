import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomepageArticles = () => {
  return (
    <div className="flex justify-between gap-8 py-10 px-10">
      <div className="font-bold basis-[70%]">
        <h1 className="text-4xl mb-6 font-bold">Top Stories</h1>
        <div className="flex justify-between gap-10 mb-[100px]">
          <div>
            <Image
              src="https://media.istockphoto.com/id/839295596/photo/six-pre-teen-friends-piggybacking-in-a-park-close-up-portrait.jpg?s=612x612&w=0&k=20&c=MWkFYzpRSvO1dRql3trV4k6ECO-rTy4HgF8OxrtUkH8="
              alt="user image"
              width={800}
              height={500}
              unoptimized
              style={{objectFit: "cover"}}
              // className="rounded-[25px]"
            />
          </div>
          <div>
            <h3 className="font-bold text-4xl mb-4">
              Christmas celebtared around the world
            </h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quasi ea doloremque eius voluptates sequi deleniti
              error aliquid perferendis modi.
            </p>
            <button className="text-white bg-[#C00000] rounded py-2 px-4">
              <Link href="/articles/1">Read More</Link>
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-10 mb-4">
          <div>
            <h3 className="font-bold text-4xl mb-4">
              Israeli strike in Syria kills Irani commander
            </h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quasi ea doloremque eius voluptates sequi deleniti
              error aliquid perferendis modi.
            </p>
            <button className="text-white bg-[#C00000] rounded py-2 px-4">
            <Link href="/articles/1">Read More</Link>
            </button>
          </div>
          <div>
            <Image
              src="https://cdnuploads.aa.com.tr/uploads/Contents/2017/10/16/thumbs_b_c_660998ca8e85123e133159408f31b9f5.jpg?v=132809"
              alt="user image"
              width={800}
              height={500}
              unoptimized
              // className="rounded-[25px]"
            />
          </div>
        </div>
      </div>
      <div className="font-bold flex-1">
        <h1 className="text-4xl mb-6 font-bold">Trending News</h1>
        <div className="mb-6">
          <h3 className="font-bold text-[24px] mb-4">
            Drinking Tea can hep you
          </h3>
          <p className="mb-4 text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quasi ea doloremque eius voluptates sequi deleniti
            error aliquid perferendis modi.
          </p>
          <button className="text-white bg-[#C00000] rounded py-2 px-4">
            Read More
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-[24px] mb-4">
            Five people found dead in Paris
          </h3>
          <p className="mb-4 text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quasi ea doloremque eius voluptates sequi deleniti
            error aliquid perferendis modi.
          </p>
          <button className="text-white bg-[#C00000] rounded py-2 px-4">
            Read More
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-[20px] mb-4">
            DNA virus found in acient remains
          </h3>
          <p className="mb-4 text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quasi ea doloremque eius voluptates sequi deleniti
            error aliquid perferendis modi.
          </p>
          <button className="text-white bg-[#C00000] rounded py-2 px-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageArticles;
