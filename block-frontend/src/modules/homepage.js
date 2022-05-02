import React, { useState, useRef, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { ethers, utils } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../conf";

const HomePageModule = (props) => {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  const [show, setShow] = useState(false);
  let history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const error = useSelector(({ userAction }) => userAction.error);

  const connectWallet = () => {
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  // Function for login
  //commit
  const accountLogin = (account) => {
    axios
      .post(SERVER_URL + "/users/login", { wallet: account })
      .then((response) => {
        if (response.data.success == true) {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("wallet", account);
          localStorage.setItem("isAdmin", response.data.isAdmin || false);
          history.push(response.data.url);
        }
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    try {
      window.ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: utils.hexValue(1666700000) }], // chainId must be in hexadecimal numbers
        })
        .then((res) => {
          console.log("res:", res);
          setdata({
            address: account,
          });
          getbalance(account);
          accountLogin(account);
        })
        .catch((error) => {
          if (error.code === 4902) {
            try {
              window.ethereum
                .request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainName: "Harmony TestNet",
                      chainId: utils.hexValue(1666700000),
                      nativeCurrency: {
                        name: "ONE",
                        symbol: "ONE",
                        decimals: 18,
                      },
                      blockExplorerUrls: ["https://explorer.pops.one/"],
                      rpcUrls: ["https://api.s0.b.hmny.io"],
                    },
                  ],
                })
                .then((res) => {
                  setdata({
                    address: account,
                  });
                  getbalance(account);
                  accountLogin(account);
                  return;
                });
            } catch (addError) {
              console.error(addError);
            }
          }
        });
    } catch (error) {}
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata({
          address: data.address,
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  return (
    <section className="">
      <div className="text-right">
        <div className="zl_securebackup_btn">
          <button onClick={handleShow} className="mx-auto" href="#">
            Connect your wallet
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2 className="header-1 text-center">Track your DAO Reputation</h2>
      <div className="header-small text-center text-muted">
        Connect your wallet to participate
      </div>
      <br />
      <br />
      <div className="text-center">
        <ul className="v-link">
          <li className="text-muted-dark">ONERep</li>
          <li className="text-muted-dark">Discord</li>
          <li className="text-muted-dark">Twitter</li>
          <li className="text-muted-dark">Docs</li>
        </ul>
      </div>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="p-4">
            <h5 className="text-center text-white">Connect your wallet</h5>
            <br />
            <br />
            <div className="text-center">
              <button type="button" className="btn-connect">
                <span color="text-white" onClick={connectWallet}>
                  Metamask{" "}
                  <img className="ml-2" src="assets/image/metamask.svg" />
                </span>
              </button>
            </div>
            <br />
            <br />
            <p className="text-center text-muted">
              <small>
                New to something <a href="#">Link for this</a>
              </small>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};
const mapStoreToProps = ({ userAction }) => ({});
export default connect(mapStoreToProps, null)(HomePageModule);
