export default function Products() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-900">
      <div className='w-full h-full max-w-7xl grid grid-cols-5'>
        {/* Cards */}
        <div className='col-span-2 h-full grid grid-cols-1 gap-4 overflow-y-auto hide-scrollbar'>
          <div className='w-full aspect-w-1 aspect-h-1 rounded-lg bg-gray-600 border-white flex justify-center items-center'>Box</div>
          <div className='w-full aspect-w-1 aspect-h-1 rounded-lg bg-gray-600 border-white flex justify-center items-center'>Box</div>
          <div className='w-full aspect-w-1 aspect-h-1 rounded-lg bg-gray-600 border-white flex justify-center items-center'>Box</div>
          <div className='w-full aspect-w-1 aspect-h-1 rounded-lg bg-gray-600 border-white flex justify-center items-center'>Box</div>
          <div className='w-full aspect-w-1 aspect-h-1 rounded-lg bg-gray-600 border-white flex justify-center items-center'>Box</div>
        </div>

        {/* Image */}
        <div className='col-span-3'>
          {/* Add your image or content here */}
        </div>

      </div>
    </div>
  );
};
