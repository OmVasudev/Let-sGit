import Image from 'next/image';

const StudentProfile = ({ student }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white mb-6">Student Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-7xl flex items-center justify-center h-full">
        <div className=" w-full max-w-4xl flex">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-100 w-1/2 flex flex-col items-center justify-center p-4 border-r border-gray-600">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={student.image}
                alt="Profile Picture"
                layout="fill"
                className="rounded-full border-3 border-black-500"
              />
            </div>
            <div className="text-center text-white">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p>Total Activity Points Earned</p>
                <p className="text-4xl">{student.activityPoints}</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div className="space-y-4 text-white">
              <div className="flex flex-col">
                <label className="mb-1">Full Name:</label>
                <input
                  type="text"
                  value={student.name}
                  className="p-2 bg-gray-800 text-white rounded-full border border-gray-600"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1">USN:</label>
                <input
                  type="text"
                  value={student.usn}
                  className="p-2 bg-gray-800 text-white rounded-full border border-gray-600"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1">E-mail:</label>
                <input
                  type="text"
                  value={student.email}
                  className="p-2 bg-gray-800 text-white rounded-full border border-gray-600"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1">Phone No.:</label>
                <input
                  type="text"
                  value={student.phone}
                  className="p-2 bg-gray-800 text-white rounded-full border border-gray-600"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1">Branch:</label>
                <input
                  type="text"
                  value={student.branch}
                  className="p-2 bg-gray-800 text-white rounded-full border border-gray-600"
                  readOnly
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                Save
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
