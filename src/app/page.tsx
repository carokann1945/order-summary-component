import IllustrationHero from '@/components/icons/IllustrationHero';
import Plan from '@/components/Plan';
import PaymentButton from '@/components/PaymentButton';

export default function Home() {
  return (
    <div className="w-[327px] h-[567px] bg-white rounded-[20px] flex md:w-[450px] md:h-[697px]">
      <div className="w-[327px] flex flex-col gap-[32px] items-center md:w-[450px] md:gap-[48px]">
        {/* 히어로 일러스트 container */}
        <div className="w-[327px] h-[160px] rounded-t-[20px] overflow-hidden md:w-[450px] md:h-[220px]">
          <IllustrationHero />
        </div>
        {/* 사진 바로 밑 container */}
        <div className="w-[279px] flex flex-col gap-[24px] items-center md:w-[354px] md:gap-[32px]">
          {/* md 오면서 새로 생긴 div */}
          <div className="flex flex-col gap-[24px] md:w-full md:flex md:flex-col md:gap-[16px] md:items-center">
            <div className="w-[263px] flex flex-col gap-[16px] items-center md:w-full">
              <h1 className="text-preset-2 text-blue-950 md:text-preset-1">Order Summary</h1>
              <p className="text-preset-4-medium text-gray-600 text-center md:text-preset-3-medium">
                You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
              </p>
            </div>
            <Plan />
          </div>
          {/* button container */}
          <div className="flex flex-col items-center w-full gap-[24px] md:gap-[32px]">
            <PaymentButton />
            <p
              className="w-full text-center text-preset-4-black text-gray-600 hover:text-blue-950 cursor-pointer
            md:text-preset-3-black">
              Cancel Order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
