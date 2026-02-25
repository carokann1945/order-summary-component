export default function PaymentButton() {
  return (
    <button className="w-full h-[50px] cursor-pointer flex justify-center items-center bg-blue-700 rounded-[11px] shadow-2xl hover:bg-purple-500">
      <span className="text-preset-4-black text-white md:text-preset-3-black">Proceed to Payment</span>
    </button>
  );
}
