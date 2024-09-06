import React from "react";

function ChatHistory() {
  const histories = [
    {
      id: "1",
      title: "How to center div?",
    },
    {
      id: "2",
      title: "What is event delegation in JavaScript?",
    },
    {
      id: "3",
      title: "How to reverse an array in JavaScript?",
    },
    {
      id: "4",
      title: "What is the difference between let and var?",
    },
    {
      id: "5",
      title: "How to create a responsive navbar using Bootstrap?",
    },
    {
      id: "6",
      title: "What is hoisting in JavaScript?",
    },
    {
      id: "7",
      title: "How to use the filter method in JavaScript?",
    },
    {
      id: "8",
      title: "What is the purpose of useEffect in React?",
    },
    {
      id: "9",
      title: "How to remove duplicates from an array?",
    },
    {
      id: "10",
      title: "How to deploy a React app to Netlify?",
    },
    {
      id: "11",
      title: "How to handle forms in React?",
    },
    {
      id: "12",
      title: "What is the difference between == and === in JavaScript?",
    },
    {
      id: "13",
      title: "How to use async/await in JavaScript?",
    },
    {
      id: "14",
      title: "What is a Promise in JavaScript?",
    },
    {
      id: "15",
      title: "How to handle CORS in a web application?",
    },
    {
      id: "16",
      title: "How to create a dropdown using Bootstrap?",
    },
    {
      id: "17",
      title: "What is the difference between null and undefined in JavaScript?",
    },
    {
      id: "18",
      title: "How to optimize React app performance?",
    },
    {
      id: "19",
      title: "What is a closure in JavaScript?",
    },
    {
      id: "20",
      title: "How to set up routing in a React app?",
    },
  ];

  return (
    <div className="mt-2 overflow-y-auto flex-grow">
      {histories.map((history) => {
        return (
          <div className="text-sm p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
            {history.title}
          </div>
        );
      })}
    </div>
  );
}

export default ChatHistory;
