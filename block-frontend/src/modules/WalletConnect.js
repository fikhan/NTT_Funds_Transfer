import React, { useState, useRef, useEffect } from "react";
import {connect} from "react-redux";
import Form from 'react-bootstrap/Form';
import { initContractAddress, deployContract } from "../service/contractService";
import { SERVER_URL } from "../conf";
import Web3 from "web3";
import axios from "axios";

const WalletConnectModule = (props) => {

    const[wallet, setWallet] = useState('');

    useEffect(() => {
        setWallet(localStorage.getItem('wallet'));
    })
    
    const onSubmitHandler = () => {
        console.log("inside handler")
       // e.preventDefault();
        let address = "";
        let username1 = document.getElementsByName("username");;
        let wallet1 = document.getElementsByName("wallet");;
        let badge1 = document.getElementsByName("badge");;
        let dao1 = document.getElementsByName("dao");
        console.log("badge",badge1[0].value);
        let web3 = new Web3(window.ethereum);
        let address1;
        try {
           address = deployContract(web3).then((response) =>{
               address1 = response
               let tokenaddress = document.getElementsByName("tokenaddress")
               tokenaddress[0].value = address1
              console.log("response address",address1)
           });
       //    console.log("Contract Address", address)
       
          } catch (error) {
            alert(error);
          }
       // console.log("wallet",e.target.wallet.value)
       // console.log("username",e.target.username.value)
       // console.log("dao",e.target.dao.value)

        // axios
        // .post(SERVER_URL + "/users/register", {
        //     username: username1,
        //     wallet: wallet1,
        //     badge: badge1,
        //     dao: dao1,
        // },{
        //     headers:{
        //         'Access-Control-Allow-Origin':"*"
        //     }
        // })
        // .then((response) => {
        //   console.log("Response from backend",response)
        // });
   
    }

    return (
        <section className="">
            <br/><br/>
            <br/><br/>
            <h2 className="header-1 text-center">Create a ONERep Account</h2>
            <br/><br/>
            <br/><br/>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <Form className="row" action={SERVER_URL + "/users/register"} method="post">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <div className="text-center"><Form.Label className="text-muted-dark">User Name</Form.Label></div>
                                <Form.Control type="text" name="username" placeholder="" required/>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <div className="text-center"><Form.Label className="text-muted-dark">Address</Form.Label></div>
                                <Form.Control type="text" value={wallet} name="wallet" placeholder="" required readonly/>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <div className="text-center"><Form.Label className="text-muted-dark">Badge Name</Form.Label></div>
                                <Form.Control type="text" name="badge" placeholder="" required/>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <div className="text-center"><Form.Label className="text-muted-dark">DAO Name</Form.Label></div>
                                <Form.Control type="text" name="dao" placeholder="" required/>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <div className="text-center"><Form.Label className="text-muted-dark">Badge Address</Form.Label></div>
                                {/* <Form.Label name="tokenaddress"></Form.Label> */}
                                <Form.Control type="text" name="tokenaddress" placeholder=""  required/>
                            </Form.Group>
                        </div>
                        <div className="col-12 text-center">
                            <div className="zl_securebackup_btn"><button type="button"  onClick={onSubmitHandler} className="mx-auto">Deploy Token</button></div>
                        </div>
                        <div className="col-12 text-center">
                            <div className="zl_securebackup_btn"><button type="submit"  className="mx-auto">Launch this ONERep</button></div>
                        </div>
                    </Form>
                </div>
            </div>

        </section>
    );
}
const mapStoreToProps = ({ userAction }) => ({
});
export default connect(mapStoreToProps, null)(WalletConnectModule);
