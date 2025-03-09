export default function TailwindExample() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                클릭하세요!
            </button>
  
        <div className="mt-6 max-w-sm bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Tailwind 카드 UI</h2>
            <p className="text-gray-600 mt-2">이것은 Tailwind CSS를 사용한 카드 디자인입니다.</p>
        </div>
        </div>
    );
}