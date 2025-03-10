import { useState } from "react";

export default function UploadClothing() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">옷 등록</h2>
        
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
        {image && <img src={image} alt="Uploaded" className="w-full h-48 object-cover mb-4 rounded-lg" />}
        
        <button className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          AI 분석하기
        </button>
      </div>
    </div>
  );
}
