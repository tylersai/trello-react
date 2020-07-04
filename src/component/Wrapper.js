/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Wrapper.css";
import Axios from "axios";

const Wrapper = ({setIsLoading}) => {
  const [lists, setLists] = useState([]);

  const fetchLists = async () => {
    setIsLoading(true);
    try {
      const res = await Axios.get("https://trello-clone-ppm.herokuapp.com/list");
      setLists(res.data);
      setIsLoading(false);
    } catch (error) {
      setLists([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
  <div id="wrapper" className="Wrapper p-2">
    {lists && lists.map(list => (
      <div key={list.id} className="trello-list rounded m-1 px-2 py-1 pb-2 trello-fadein" >
      <div className="d-flex justify-content-between align-items-center mb-1">
        <h6 className="pl-2">{list.title}</h6>
        <button className="btn btn-sm stretch-x"><i className="fa fa-ellipsis-h"></i></button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-sm text-left" id="add-new-card">
          <i className="fa fa-plus"></i>&nbsp;&nbsp;Add another card
        </button>
        <button className="btn btn-sm"><i className="fa fa-window-maximize"></i></button>
      </div>
    </div>
    ))}
  </div>
  );
};

export default Wrapper;