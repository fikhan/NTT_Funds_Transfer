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
  const [selectedV, setSelectedV] = useState('');
  const [sort_name, setSortName] = useState(1);
  const [sort_id, setSortId] = useState(1);
  const [sort_sum, setSortSum] = useState(1);
  const [sortOption, setSortOption] = useState({ name: 1 });
  const [daodata,setDaoData] = useState([]);

  const getOneRepBoard = (value) => {

    if(daodata.length > 1)
    {
      daodata.map((m)=>{
        if(m.dao == value)
        {
          console.log("inside condition " + m.dao + "wallet" + m.wallet)
          axios
      .post(SERVER_URL + "/getOneRepBoard", {
        master: m.wallet,
        sort: sortOption,
      })
      .then((response) => {
        console.log("Response from backend",response)
        setBoardData(response.data.users)   
         });

        }
      })
    }
    else
    {
      axios
      .post(SERVER_URL + "/getOneRepBoard", {
        master: daodata.wallet,
        sort: sortOption,
      })
      .then((response) => {
        console.log("Response from backend",response)
        setBoardData(response.data.users)   
         });
    }
    // axios
    //   .post(SERVER_URL + "/getOneRepBoard", {
    //     master: localStorage.getItem("wallet"),
    //     sort: sortOption,
    //   })
    //   .then((response) => {
    //     console.log("Response from backend",response)
    //     setBoardData(response.data.users)   
    //   });

    
  };

  useEffect(() => {
    console.log("Dao Data",daodata)
  }, [daodata])

  useEffect(() => {
    console.log("BoardData",boardData)
  }, [boardData])

  useEffect(()=>{
     console.log("selected Value",selectedV)
  }, [selectedV])

  const getSelOpList = () => {
    axios
      .post(SERVER_URL + "/getSelOpList", {
        master: localStorage.getItem("wallet"),
      })
      .then((response) => {
        console.log("The response in inside getSelOpList",response);
        setSelectData(response.data);
      });
  };

  const handleDropDown = (e) => {
    console.log("Handle Drop Down",e)
    getOneRepBoard(e);
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
   // handleInitContract();
   axios.post(SERVER_URL + "/getDaoData", {
    master: localStorage.getItem("wallet")
  }).then((resp)=>{
      setDaoData(resp.data) 
    });
   
  
   
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
      <Dropdown onSelect={handleDropDown}>
        <Dropdown.Toggle variant="dropdown" id="dropdown-basic">
          Select DAO
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {

          (daodata.length >1) ? daodata.map((m)=>{
            return <Dropdown.Item eventKey={m.dao}>{m.dao}</Dropdown.Item>          
         }): <Dropdown.Item eventKey={daodata.dao}>{daodata.dao}</Dropdown.Item>
         
  
          }
          {/* <Dropdown.Item onClick={handleDropDown}>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
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
