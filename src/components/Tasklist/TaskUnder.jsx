import React from "react";

const TaskUnder = () => {
  return (
    <div className="w-full px-4 md:px-10 mt-10">
      <div className="w-full max-w-7xl mx-auto bg-[#1e272e] rounded-xl shadow-lg shadow-black p-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-5">
          <div>
            <h2 className="text-white text-2xl font-bold">Task Overview</h2>
            <p className="text-gray-400 text-sm">Manage your recent tasks</p>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200">View All</button>
        </div>

        <div className="space-y-4">
          <div className="bg-[#111] p-4 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <div>
              <h3 className="text-white font-semibold">Create Employee Dashboard</h3>
              <p className="text-gray-400 text-sm">Complete responsive UI design</p>
            </div>
            <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm">Pending</span>
          </div>
          <div className="bg-[#111] p-4 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <div>
              <h3 className="text-white font-semibold">Fix Login Issue</h3>
              <p className="text-gray-400 text-sm">Authentication problem solve</p>
            </div>
            <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm">Completed</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TaskUnder;