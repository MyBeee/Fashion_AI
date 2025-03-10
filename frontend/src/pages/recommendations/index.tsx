export default function Recommendations() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">AI 추천 코디</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">상의</div>
          <div className="bg-white p-4 rounded-lg shadow-md">하의</div>
          <div className="bg-white p-4 rounded-lg shadow-md">신발</div>
          <div className="bg-white p-4 rounded-lg shadow-md">악세서리</div>
        </div>
      </div>
    );
  }
  