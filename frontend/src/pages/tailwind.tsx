export default function TailwindExample() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="test-4xl font-bold test-blue-600">Tailwind CSS 시작하기</h1>
            <p className="mt-2 text-gray-700">이것은 Tailwind로 만든 간단한 UI입니다.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                클릭하세요!
            </button>
        </div>
    )
}