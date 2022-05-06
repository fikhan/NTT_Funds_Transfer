import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Web3 from "web3";
import { initContractByChainId } from "../service/contractService";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import "react-step-progress/dist/index.css";
import axios from "axios";
const { SERVER_URL, LOCAL_URL } = require("../conf");

const OneRepBoardModule = (props) => {
  const [show, setShow] = useState(false);
  const [selectData, setSelectData] = useState([]);
  const [boardData, setBoardData] = useState([]);
  const [sort_name, setSortName] = useState(1);
  const [sort_id, setSortId] = useState(1);
  const [sort_sum, setSortSum] = useState(1);
  const [sortOption, setSortOption] = useState({ name: 1 });

  const getOneRepBoard = () => {
    axios
      .post(SERVER_URL + "/getOneRepBoard", {
        master: localStorage.getItem("wallet"),
        sort: sortOption,
      })
      .then((response) => {
        console.log("Response from backend",response)
        setBoardData(response.data.users);
        console.log("Board data", boardData)
      });
  };

  const getSelOpList = () => {
    axios
      .post(SERVER_URL + "/getSelOpList", {
        master: localStorage.getItem("wallet"),
      })
      .then((response) => {
        setSelectData(response.data);
      });
  };

  const handleDropDown = () => {
    console.log("Handle Drop Down")
    getOneRepBoard();
  };

  const handleInitContract = async () => {
    let web3 = new Web3(window.ethereum);
    try {
      initContractByChainId(web3, await web3.eth.net.getId());
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    handleInitContract();
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("wallet") == "" ||
      !localStorage.getItem("wallet")
    ) {
      window.location.href = LOCAL_URL;
      return;
    }
  }, [show, sortOption]);

  return (
    <section className="">
      <br />
      <br />
      <div className="zl_all_page_heading_section">
        <div className="zl_all_page_heading">
          <h2>ONERep Board</h2>
          <p>Lorem Ipsum is simply dummy text of the printing & industry.</p>
        </div>
        <div className="zl_all_page_notify_logout_btn"></div>
      </div>
      <br />
      <br />
      <Dropdown>
        <Dropdown.Toggle variant="dropdown" id="dropdown-basic">
          Select DAO
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleDropDown}>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <div className="text-white text-sm lh-2">
        DAO Name : Russel <br />
        Token Name : DAOCoin <br />
        No of Tokens : 232
      </div>
      <br />
      <br />
      <div>
        <Table striped className="zl_transaction_list_table table">
          <thead>
            <tr>
              <th
                onClick={() => {
                  setSortName(-sort_name);
                  setSortOption({ name: -sort_name });
                }}
              >
                Name
              </th>
              <th
                onClick={() => {
                  setSortId(-sort_id);
                  setSortOption({ _id: -sort_id });
                }}
              >
                Wallet Id
              </th>
              <th
                onClick={() => {
                  setSortSum(-sort_sum);
                  setSortOption({ sum: -sort_sum });
                }}
              >
                ONERep Tokens
              </th>
            </tr>
          </thead>
          <tbody>
            {boardData.map((row, i) => {
              return (
                <tr key={i}>
                  <td>{row.name}</td>
                  <td>{row._id}</td>
                  <td className="zl_transaction_minas zl_transaction_list_value">
                    {row.sum}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </section>
  );
};
const mapStoreToProps = ({ userAction }) => ({});
export default connect(mapStoreToProps, null)(OneRepBoardModule);
