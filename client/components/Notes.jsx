import React from "react";

const Notes = () => {
  return (
    // React.Fragment === <>
    <>
      <div className="row_LR_parent">
        <div className="row_Left">
          <h2>Name:id</h2>
        </div>
        <div className="row_Right">
          <p className="textBox">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            aperiam laudantium quis ullam reiciendis ut dolorem cum, unde eum
            alias dolores blanditiis nesciunt ab tempore nihil dicta laborum
            cupiditate voluptates.
          </p>
          <p className="textBox">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            aperiam laudantium quis ullam reiciendis ut dolorem cum, unde eum
            alias dolores blanditiis nesciunt ab tempore nihil dicta laborum
            cupiditate voluptates.
          </p>
          <div className="row_LR_paretn">
            <button className="update_post">Save</button>
            <button className="update_post">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
