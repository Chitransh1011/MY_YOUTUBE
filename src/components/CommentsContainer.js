import React from "react";

const CommentData = [
  {
    name: "ABC",
    text: "dskjbfojashn fsdnofjasoifj",
    repiles: [],
  },
  {
    name: "ABC",
    text: "dskjbfojashn fsdnofjasoifj",
    repiles: [
      {
        name: "ABC",
        text: "dskjbfojashn fsdnofjasoifj",
        repiles: [
          {
            name: "ABC",
            text: "dskjbfojashn fsdnofjasoifj",
            repiles: [
              {
                name: "ABC",
                text: "dskjbfojashn fsdnofjasoifj",
                repiles: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ABC",
    text: "dskjbfojashn fsdnofjasoifj",
    repiles: [],
  },
  {
    name: "ABC",
    text: "dskjbfojashn fsdnofjasoifj",
    repiles: [
      {
        name: "ABC",
        text: "dskjbfojashn fsdnofjasoifj",
        repiles: [
          {
            name: "ABC",
            text: "dskjbfojashn fsdnofjasoifj",
            repiles: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, repiles } = data;
  return (
    <>
      <div className="mx-4 p-2 flex bg-gray-100 rounded-md my-2">
        <img
          className="w-8 h-8"
          alt="user"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        ></img>
        <div>
          <p className="px-2 font-bold">{name}</p>
          <p className="px-2">{text}</p>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div>
        <Comment key={index} data={comment} />
        <div className="pl-5 ml-5 border border-l-black border-4">
          <CommentList comments={comment.repiles} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl px-2 mx-4">Comments:</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentsContainer;
