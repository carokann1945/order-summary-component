import Music from './icons/Music';

export default function Plan() {
  return (
    <div
      className="w-full h-[81px] flex justify-center items-center bg-blue-50 rounded-[11px] p-[16px]
    md:h-[98px] md:p-[24px]">
      <div className="w-[247px] flex justify-between items-center md:w-[306px]">
        <div className="flex gap-[16px]">
          <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center gap-[16px]">
            <Music />
          </div>
          <div className="w-[89px] flex flex-col md:w-[117.19px]">
            <p className="text-preset-4-black text-blue-950 md:text-preset-3-black">Annual Plan</p>
            <p className="text-preset-4-medium text-gray-600 md:text-preset-3-medium">$59.99/year</p>
          </div>
        </div>
        <p className="text-preset-4-bold text-blue-700 md:text-preset-3-bold">Change</p>
      </div>
    </div>
  );
}
