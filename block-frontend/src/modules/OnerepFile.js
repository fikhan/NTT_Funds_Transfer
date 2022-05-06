// import React, { useState, useRef, useEffect } from "react";
// import { connect } from "react-redux";
// import Table from "react-bootstrap/Table";
// import Modal from "react-bootstrap/Modal";
// import StepProgressBar from "react-step-progress";
// import UploadService from "../service/upload-files.service";
//  import { FileUpload } from "react-ipfs-uploader";
// import Papa from "papaparse";
// import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
// import axios from "axios";
// import $ from "jquery";
// import ReactDOMServer from "react-dom/server";
// import "react-step-progress/dist/index.css";
// import { determineAddress } from "../service/contractService";
// import Web3 from "web3";
// import { ethers } from "ethers";
// import { getMintApprovalSignature } from "../service/utils";
// const { SERVER_URL, LOCAL_URL } = require("../conf");

// const OneRepFileModule = (props) => {
//   var filename1 ='';

//   var pathip = '';
//   const client = create('https://ipfs.infura.io:5001/api/v0')
//   const [fileUrl, setFileUrl] = useState('');
//   const [fname, setfname] = useState('test');
//   const [fpath, setfpath] = useState('test');
//   const [show, setShow] = useState(false);
//   const [showSucces, setshowSucces] = useState(false);
//   const [repfiles, setRepFiles] = useState([]);


//   const [progress, setProgress] = useState(0);
//   const [ipfsPath, setipfsPath] = useState("");
//   const [ipfsName, setipfsName] = useState("");
//   const [reputation, setReputation] = useState(0);
//   const [disabled, setDisabled]= useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => {

//     setShow(true);
//     setFile(fileUrl);
//     setTableRows([]);
//     setValues([]);
//     setStep(0);
//     setProgress(0);
//     setDisabled(false);
//   };

//   const handleCloseSuccess = () => setshowSucces(false);
//   const handleShowSuccess = () => setshowSucces(true);

//   const [images, setImages] = useState({ cid: CID, path: "" });

//   const [totalMint, setTotalMint] = useState(0);

//   const [file, setFile] = useState(null);

//   const [parsedData, setParsedData] = useState([]);

//   const [csvData, setCSVData] = useState([]);

//   //State to store table Column name
//   const [tableRows, setTableRows] = useState([]);

//   //State to store the values
//   const [values, setValues] = useState([]);

//   const [step, setStep] = useState(0);

//   let web3 = null;
  
 
//   const InitWeb3 = async () => {
//     if (window.ethereum) {
//       web3 = new Web3(window.ethereum);
//       getMintApprovalSignature(
//         await web3.eth.net.getId(),
//         8,
//         20,
//         "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
//       ).then(console.log);
//     }
//   };

//   useEffect(() => {
//     // InitWeb3();
//   }, []);

//   useEffect(() => {
//     if (
//       localStorage.getItem("wallet") == "" ||
//       !localStorage.getItem("wallet")
//     ) {
//       window.location.href = LOCAL_URL;
//       return;
//     }
//     if (step == 1) {
//       if ($("#step2")) {
//         const str = ReactDOMServer.renderToString(step2Content);
//         $("#step2").parent().html(str);
//       }
//     } else if (step == 2) {
//       if ($("#step2")) {
//         const str = ReactDOMServer.renderToString(step3Content);
//         $("#step2").parent().html(str);
//       }
//     }
//   }, [step]);

//   const handleSubmit = () => {
//     console.log("fname",fname)
//     console.log("fpath",fpath)
//     setShow(false);
//     console.log("handler function")
//     setTotalMint(reputation);
//     console.log("The filename is",filename1)
//     console.log("The ipfs path is",pathip)
//     axios
//       .post(SERVER_URL + "/files/add", {
//         filename: fname,
//         ipfsuri: fpath,
//         status: true,
//         reputation: 10,
//         data: values,
//         master: localStorage.getItem("wallet"),
//       })
//       .then((response) => {
//         getOneRepFile();
//         handleShowSuccess();
//       });
//   };

//   const getOneRepFile = () => {
//     axios
//       .post(SERVER_URL + "/files", { master: localStorage.getItem("wallet") })
//       .then((response) => {
//         setRepFiles(response.data);
//       });
//   };
//   getOneRepFile();

//   async function  onSubmitHandler (e) {
//     // e.preventDefault();
//     // const files = e.target.files[0].name;
//     // console.log("file name present inside", files)
//     // console.log("file name ",files[0].name);
//     // filename = files[0].name
//     console.log("Inside on submit handler")
//     try{ 
//       console.log("show filename",filename1)
//       const added = await client.add(filename1)
//       console.log("edit path", added)
//       const url = `https://ipfs.infura.io/ipfs/${added.path}`
//       setfpath(url)
//       pathip = url
//       //  updateFileUrl(url)
//       console.log("url name" , pathip)
//       }
//       catch (error) {
//         console.log('Error uploading file: ', error)
//       }  
      
   
//     //setfilename(file[0].name);
//     //console.log("final file name", filename)
//     //console.log("ipfs name ", ipfsName)
//     // const files = e.target[0].files;
//     // if (!files || files.length === 0) {
//     //   return alert("No files selected");
//     // }
//     // setFile(files[0]);
//     // let prefix = "data__" + Date.now() + "__";
//     // setipfsName(files[0].name);
//     // setipfsPath(prefix + files[0].name);
//     // UploadService.upload(files[0], prefix, (event) => {
//     //   setProgress(Math.round((100 * event.loaded) / event.total));
//     // })
//     //   .then((response) => {
//     //     alert(response.data.message);
//     //     Papa.parse(files[0], {
//     //       header: true,
//     //       skipEmptyLines: true,
//     //       complete: (results) => {
//     //         const rowsArray = [];
//     //         const valuesArray = [];

//     //         setCSVData(results.data);

//     //         // Iterating data to get column name and their values
//     //         let rep = 0;
//     //         results.data.map((d) => {
//     //           rowsArray.push(Object.keys(d));
//     //           valuesArray.push(Object.values(d));
//     //           rep += parseInt(d.received);
//     //         });
//     //         setReputation(rep);
//     //         // Parsed Data Response in array format
//     //         setParsedData(results.data);

//     //         // Filtered Column Names
//     //         setTableRows(rowsArray[0]);

//     //         // Filtered Values
//     //         setValues([...values, ...valuesArray]);
//     //       },
//     //     });

//     //     // this.setState({
//     //     // message: response.data.message,
//     //     // });
//     //     // return UploadService.getFiles("data");
//     //   })
//     //   .then((files) => {
//     //     // this.setState({
//     //     // fileInfos: files.data,
//     //     // });
//     //   })
//     //   .catch(() => {
//     //     this.setState({
//     //       progress: 0,
//     //       message: "Could not upload the file!",
//     //       currentFile: undefined,
//     //     });
//     //   });
//   };
//   async function handleChange(e)  {
//     filename1= e.target.files[0].name;
//     setfname(filename1)
//     console.log("filename con", filename1)
//   //   e.preventDefault();
//   //  // console.log(`Selected file - ${e.target.files[0].name}`);
//   //   const files = e.target[0].files.name;
//   //   console.log("file name present inside", files);
//   //   console.log("file name ",files[0].name);
//   //   filename = files[0].name
//   //   try{ 
//   //     const added = await client.add(file)
//   //     console.log("edit path", added)
//   //     const url = `https://ipfs.infura.io/ipfs/${added.path}`
//   //     pathip = url
//   //     //  updateFileUrl(url)
//   //     console.log("url name" , url)
//   //     }
//   //     catch (error) {
//   //       console.log('Error uploading file: ', error)
//   //     }  
      
//   // }

//   }
//   const step1Content = (
//     <div>
//       <br />
//       <h5 className="text-center text-white">Upload Cordinape File</h5>
//       <br />
//       {
        
//       //  <FileUpload handleChange={handleChange} name="file" types={fileTypes} />
//       }
//       {
//         <>
       
//           <p>Upload File using IPFS</p>
//           {/* <form onSubmit={onSubmitHandler}> */}
//             {<div className="progress">
//                         <div
//                             className="progress-bar progress-bar-info progress-bar-striped"
//                             role="progressbar"
//                             aria-valuenow={progress}
//                             aria-valuemin="0"
//                             aria-valuemax="100"
//                             style={{ width: progress + "%" }}
//                         >
//                             {progress}%
//                         </div>
//                     </div> }
        
//  {/* <form>

// <div bgcolor = "white"><input type="file" onChange={handleChange} /><br/><br/><br/></div>
  
        
// {/* <div><input type="submit" value="upload" /></div> */}


//         {/* </form> */} 
//   {/* <label><h1>Please select the filename</h1></label> */}
//         <input type="file" onChange={handleChange} />
//         <br>
//         </br>
//         <br>
//         </br>
//         {/* <input type="submit" value="upload" onSubmit={onSubmitHandler} /> */}
//         <button value="Upload" onClick={onSubmitHandler}>Upload</button>
//         {/* <button value="hello!" onClick={e => alert(e.target.value)}> */}
//       {/* Click me!
//     </button> */}
         
//             {/* <FileUpload  setUrl={setFileUrl} onSubmit={handleChange} />
//             FileUrl : <a
//                 href={fileUrl}
//                 target='_blank'
//                 rel='noopener noreferrer'
//             >
//                 {fileUrl}
//                 {pathip= fileUrl} */}
//             {/* </a> */}
//        {
//        console.log("file upload",fileUrl)}

//        {
//       //    console.log ("my value",document.getElementByxpath("/html/body/div[3]/div/div/div/div/div/div[1]/div/div[2]/form/div/h5"))
       
//        }
        
//     )
    
//           {/* </form> */}
//         </>
//       }
//     </div>
//   );
//   const step2Content = (
//     <div id="step2">
//       <br />
//       <h5 className="text-center text-white">Verify the records</h5>
//       <br />
//       <Table responsive striped className="zl_transaction_list_table table">
//         <thead>
//           <tr>
//             {tableRows.map((rows, index) => {
//               return <th key={index}>{rows}</th>;
//             })}
//           </tr>
//         </thead>
//         <tbody>
//           {values.map((value, index) => {
//             return (
//               <tr key={index}>
//                 {value.map((val, i) => {
//                   return <td key={i}>{val}</td>;
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//       <br />
//       <div className="text-right text-white">
//         <h6>Total Mint: {reputation}</h6>
//       </div>
//     </div>
//   );

//   const step3Content = (
//     <div>
//       <br />
//       <h5 className="text-center text-white">Mint and Allocate Tokens</h5>
//       <br />
//       <div className="text-center text-white">
//         <h6>Total Mint: {reputation}</h6>
//       </div>
//       <br />
//     </div>
//   );

//   const step1Validator = () => {
//     setTimeout(() => {
//       setStep(1);
//     }, 100);
//     return true;
//   };

//   const step2Validator = () => {
//     setTimeout(() => {
//       setStep(2);
//     }, 100);
//     return true;
//   };

//   return (
    
//     <section className="">
//       <br />
//       <br />

//       <div className="zl_all_page_heading_section">
//         <div className="zl_all_page_heading">
//           <h2>ONERep Files (Cordianpe)</h2>
//           <p>dummy text of the printing & industry.</p>
//         </div>
//         <div className="zl_all_page_notify_logout_btn">
//           <ul className="v-link">
//             <li>
//               <button onClick={handleShow} className="btn-connect"  disabled={false}>
//                 Add ONERep File
//                 {console.log("abc 21",show)}
//               </button> 
//             </li>
//           </ul>
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <div>
//         <Table striped className="zl_transaction_list_table table">
//           <thead>
//             <tr>
//               <th>File Name</th>
//               <th>IPFS URI</th>
//               <th>Reputation Value</th>
//               <th>Status</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//           {console.log("row in grid",repfiles)}
//             {   
          
//             repfiles.map((row, i) => (
              
//               <tr key={i}>
                
//                 <td>{row.filename}</td>
//                 <td>{row.ipfsuri}</td>
//                 <td>{row.reputation}</td>
//                 <td>{row.status ? "Completed" : "Failed"}</td>
//                 <td>{row.created_at}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <Modal centered show={show} size="lg" onHide={handleClose}>
//         <Modal.Body>
//           {console.log( "upload file show status", show)}
//           <div className="p-4">
//             <StepProgressBar
//               onSubmit={handleSubmit}
//               startingStep={0}
//               submitBtnName="Mint"
            
//               nextBtnName="Next"
//               steps={[
//                 {
//                   label: "Step 1",
//                   content: step1Content,
//                   validator: step1Validator,
//                 },
//                 {
//                   label: "Step 2",
//                   content: step2Content,
//                   validator: step2Validator,
//                 },
//                 {
//                   label: "Step 3",
//                   content: step3Content,
//                 },
//               ]}
//             />
//           </div>
//         </Modal.Body>
//       </Modal>
//       <Modal centered show={showSucces} onHide={handleCloseSuccess}>
//         <Modal.Body>
//           <div className="p-4">
//             <br />
//             <h4 className="text-center text-white">
//               Successfully <br /> Minted
//             </h4>
//             <br />
//             <br />
//             <div className="text-center">
//               <button
//                 type="button"
//                 className="btn-connect"
//                 onClick={handleCloseSuccess}
//               >
//                 Okay Got it
//               </button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </section>
//   );
// };
// const mapStoreToProps = ({ userAction }) => ({});
// export default connect(mapStoreToProps, null)(OneRepFileModule);
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import React, { useState, useRef, useEffect } from "react";
import { BigNumber, Signer } from "ethers";
//import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import StepProgressBar from "react-step-progress";
import UploadService from "../service/upload-files.service";
// import { FileUploader } from "react-drag-drop-files";
import { ABI, TESTNET_ADDRESS, MAINNET_ADDRESS,bytecode, ABI2 } from "../shared/constants";
import Papa from "papaparse";
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import axios from "axios";
import $ from "jquery";
import ReactDOMServer from "react-dom/server";
import "react-step-progress/dist/index.css";
import { determineAddress, initContractByAddress } from "../service/contractService";
import Web3 from "web3";
import { ethers } from "ethers";
import { getMintApprovalSignature } from "../service/utils";
const { SERVER_URL, LOCAL_URL } = require("../conf");


const OneRepFileModule = (props) => {
  // let ipfs = IPFSHTTPClient | undefined;
  // try {
  //     ipfs = create({
  //         url: "https://ipfs.infura.io:5001/api/v0",
  //     });
  // } catch (error) {
  //     console.error("IPFS error ", error);
  //     ipfs = undefined;
  // }

  const [show, setShow] = useState(false);
  const [showSucces, setshowSucces] = useState(false);
  const [repfiles, setRepFiles] = useState([]);

  const [progress, setProgress] = useState(0);
  const [ipfsPath, setipfsPath] = useState("");
  const [ipfsName, setipfsName] = useState("");
  const [reputation, setReputation] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setFile(null);
    setTableRows([]);
    setValues([]);
    setStep(0);
    setProgress(0);
  };

  const handleCloseSuccess = () => setshowSucces(false);
  const handleShowSuccess = () => setshowSucces(true);

  const [images, setImages] = useState({ cid: CID, path: "" });

  const [totalMint, setTotalMint] = useState(0);

  const [file, setFile] = useState(null);

  const [parsedData, setParsedData] = useState([]);

  const [csvData, setCSVData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const [step, setStep] = useState(0);

  const [badgeaddress,setBadgeAddress] = useState('')
  const [badgecontract,setBadgeContract] = useState(null)
  let web3 = null;
  //let badgeaddress = '';
  //let badgecontract = '';

  const InitWeb3 = async (contractAddress) => {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      getMintApprovalSignature(
        await web3.eth.net.getId(),
        8,
        20,
        contractAddress
      ).then(console.log("i am inside"));
    }
  };

//   useEffect(() => {

//     console.log("logged in user",localStorage.getItem("username"));
//     let username = localStorage.getItem("username");
   

//     axios.post(SERVER_URL + "/users/loggedinuser",{
      
//       user: username
 
//     }).then((response) =>{

//    console.log("The logged in user is", JSON.stringify(response))
//    let badgeadd = response.data.badgeAddress;
//    console.log("The badge address of the user is", badgeadd)
   
//    const provider = new ethers.providers.Web3Provider(window.ethereum)
//   // let badgecontract = initContractByAddress(web3,badgeaddress)
//   //   let badgecontract = initContractByAddress(web3,badgeaddress,provider)
//    let badgecont = new ethers.Contract(badgeadd,ABI,provider);
//    setBadgeContract(badgecont)
//    setBadgeAddress(badgecont.address)
//    console.log("Badge Contract Instance Address is", badgeaddress);
//  })
  //  InitWeb3();
 // }, []);


 
  useEffect(() => {
    if (
      localStorage.getItem("wallet") == "" ||
      !localStorage.getItem("wallet")
    ) {
      window.location.href = LOCAL_URL;
      return;
    }
    if (step == 1) {
      if ($("#step2")) {
        const str = ReactDOMServer.renderToString(step2Content);
        $("#step2").parent().html(str);
      }
    } else if (step == 2) {
      if ($("#step2")) {
        const str = ReactDOMServer.renderToString(step3Content);
        $("#step2").parent().html(str);
      }
    }
  }, [step]);
  
  let badgeadd = '';
  let badgecont = '';

  


  
  const handleSubmit = async () => {
 
    
    
    setShow(false);
    setTotalMint(reputation);
    console.log("Inside submit")
    console.log("Values contain", values)
    console.log("logged in user",localStorage.getItem("username"))
    let username = localStorage.getItem("username")
    console.log("The username is", username)
    axios.post(SERVER_URL + "/users/loggedinuser",{
         user: username
    }).then(async (response) =>{

      console.log("The logged in user is", JSON.stringify(response));
      badgeadd = response.data.badgeAddress;
      console.log("The badge address of the user is", response.data.badgeAddress)
      const prov = new ethers.providers.Web3Provider(window.ethereum)
      badgecont = new ethers.Contract(badgeadd,ABI,prov);
      console.log("Badge Contract Instance Address in Handle Submit is", badgecont.address);
      let wallet = localStorage.getItem('wallet')
      console.log("The wallet is",wallet)
      //let reccont;
      let recipientcontractadd;
      let tokenamount;
      // let account0,account1,account2;
    
      // [account0, account1, account2] = await ethers.getSigners();
      // console.log("account 0", await account0.getAddress());
      // console.log("account 1",await account1.getAddress());
      // console.log("account 2 ",await account2.getAddress());

  const executeMinting = async (value) => {
      
    const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner();
      console.log("Value :",value);
      console.log("Recieved Column",value[3]);
      recipientcontractadd = value[7];
      tokenamount = value[3];
      const provider2 = new ethers.providers.Web3Provider(window.ethereum)
      reccont = new ethers.Contract(recipientcontractadd,ABI2,provider2);
      console.log("Before pass", reccont.address.toString());
      console.log("The signer address", signer.address)
      console.log("The balance of recieved contract before",await badgecont.balanceOf(reccont.address, 1).then((resp)=>{ console.log("resp from before",resp)}))
      await badgecont.connect(signer).mintToContract(reccont.address,1,tokenamount,"https://your-domain-name.com/credentials/tokens/1",[]).then(async (resp)=>{
            console.log("Badge Address " + badgecont.address + "Reciever Address" + reccont.address)
            console.log("The balance of recieved contract After",badgecont.balanceOf(reccont.address, 1))
          });
      //console.log("The balance of recieved contract After",badgecont.balanceOf(reccont.address, 1))
  }
      // for(let i = 0; i <= values.length;i++)
      // {
      //    executeMinting(values[i]);
      // }
    
      var reccont = new Array(values.length);
      
      for(let j=0; j < reccont.length;j++){
      
        const provider2 = new ethers.providers.Web3Provider(window.ethereum)
        console.log("The value",values[j][7]);
         reccont[j] = new ethers.Contract(values[j][7],ABI2,provider2);
         console.log("Before pass", reccont[j].address.toString());

      }

       for(let g=0; g < reccont.length;g++){
        
         console.log("The balance of recieved contract before",await badgecont.balanceOf(reccont[g].address, 1).then((resp)=>{ console.log("resp from before",resp)}))

       }
      
       const provider = new ethers.providers.Web3Provider(window.ethereum)
       const signer = provider.getSigner();

       for(let i = 0; i < values.length;i++)
       {
        
         console.log("Before pass", reccont[i].address.toString());
         tokenamount= values[i][3]
         await badgecont.connect(signer).mintToContract(reccont[i].address,1,tokenamount,"https://your-domain-name.com/credentials/tokens/1",[]).then(async (resp)=>{
             console.log("Badge Address " + badgecont.address + "Reciever Address" + reccont[i].address)
             console.log("The balance of recieved contract After",badgecont.balanceOf(reccont[i].address, 1))
           });
       }







    //   values.map(async (v) => {
        
    //     executeMinting(v)
    //     console.log("The recipient address", recipientcontractadd);
    //     console.log("The badge address inside values", badgecont.address);
    //     console.log("The wallet address is ", wallet);
       
        
    //   // const provider2 = new ethers.providers.Web3Provider(window.ethereum)
    //   // reccont = new ethers.Contract(recipientcontractadd,ABI2,provider2);
    //   // console.log("Before pass", reccont.address.toString());
    //   // console.log("The signer address", signer.address)
    //   // console.log("The balance of recieved contract before",badgecont.balanceOf(reccont.address, 1))
    //   // badgecont.connect(signer).mintToContract(reccont.address,1,tokenamount,"https://your-domain-name.com/credentials/tokens/1",[])/*.then(async (resp)=>{
    //   //       console.log("Badge Address " + badgecont.address + "Reciever Address" + reccont.address)
    //   //       console.log("The balance of recieved contract After",badgecont.balanceOf(reccont.address, 1))
    //   //     });*/
        
    //    // InitWeb3(badgecont.address);
    //   //  const provider = new ethers.providers.JsonRpcProvider(
    //   //   "https://api.s0.b.hmny.io"
    //   // );
    
    //   //  const signer = provider.getSigner(wallet)//.then((res)=>{console.log("inside the result promise",res)});
    //   // console.log("The signer",signer.getAddress().then((res)=>{console.log("res inside",res)}));
     
      
          

    //  // if(reccont.address === "0x0D0033F64bC8AEb42D279e4326824377d27C43bc")
    //   //{
    //   //  console.log("I am inside v")
    //   //  console.log("tokenmount", tokenamount)
       
         
    //     //const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner()
       
    //    // window.ethereum
    //     //.request({ method: "eth_requestAccounts" })
    //     //.then(async (res) => {
         
    //       //console.log("the signer",res[0]);
          
    //     //})
       

    //   })
    })
   
    // 

    
    
    axios
      .post(SERVER_URL + "/files/add", {
        filename: ipfsName,
        ipfsuri: ipfsPath,
        status: true,
        reputation: reputation,
        data: values,
        master: localStorage.getItem("wallet"),
      })
      .then((response) => {
        getOneRepFile();
        handleShowSuccess();
      });
  };

  const getOneRepFile = () => {
    axios
      .post(SERVER_URL + "/files", { master: localStorage.getItem("wallet") })
      .then((response) => {
        setRepFiles(response.data);
      });
  };
  getOneRepFile();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const files = e.target[0].files;
    if (!files || files.length === 0) {
      return alert("No files selected");
    }
    setFile(files[0]);
    let prefix = "data__" + Date.now() + "__";
    setipfsName(files[0].name);
    setipfsPath(prefix + files[0].name);
    UploadService.upload(files[0], prefix, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        alert(response.data.message);
        Papa.parse(files[0], {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const rowsArray = [];
            const valuesArray = [];

            setCSVData(results.data);

            // Iterating data to get column name and their values
            let rep = 0;
            results.data.map((d) => {
              rowsArray.push(Object.keys(d));
              valuesArray.push(Object.values(d));
              rep += parseInt(d.received);
            });
            setReputation(rep);
            // Parsed Data Response in array format
            setParsedData(results.data);

            // Filtered Column Names
            setTableRows(rowsArray[0]);

            // Filtered Values
            setValues([...values, ...valuesArray]);
          },
        });

        // this.setState({
        // message: response.data.message,
        // });
        // return UploadService.getFiles("data");
      })
      .then((files) => {
        // this.setState({
        // fileInfos: files.data,
        // });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });
  };

  const step1Content = (
    <div>
      <br />
      <h5 className="text-center text-white">Upload Cordinape File</h5>
      <br />
      {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes} /> */}
      {
        <>
          <p>Upload File using IPFS</p>
          <form onSubmit={onSubmitHandler}>
            {/* <div className="progress">
                        <div
                            className="progress-bar progress-bar-info progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: progress + "%" }}
                        >
                            {progress}%
                        </div>
                    </div> */}
            <label className="btn btn-default text-white">
              <input name="file" type="file" accept=".csv" />
            </label>
            <button className="btn btn-success" type="submit">
              Upload File
            </button>
          </form>
        </>
      }
    </div>
  );
  const step2Content = (
    <div id="step2" className="table-responsive">
      <br />
      <h5 className="text-center text-white">Verify the records</h5>
      <br />
      {/* <Table responsive striped className="zl_transaction_list_table table"> */}
      <Table responsive striped className="zl_transaction_list_table table">
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <div className="text-right text-white">
        <h6>Total Mint: {reputation}</h6>
      </div>
    </div>
  );

  const step3Content = (
    <div>
      <br />
      <h5 className="text-center text-white">Mint and Allocate Tokens</h5>
      <br />
      <div className="text-center text-white">
        <h6>Total Mint: {reputation}</h6>
      </div>
      <br />
    </div>
  );

  const step1Validator = () => {
    setTimeout(() => {
      setStep(1);
    }, 100);
    return true;
  };

  const step2Validator = () => {
    setTimeout(() => {
      setStep(2);
    }, 100);
    return true;
  };

  return (
    <section className="">
      <br />
      <br />
      <div className="zl_all_page_heading_section">
        <div className="zl_all_page_heading">
          <h2>ONERep Files (Cordianpe)</h2>
          <p>Lorem Ipsum is simply dummy text of the printing & industry.</p>
        </div>
        <div className="zl_all_page_notify_logout_btn">
          <ul className="v-link">
            <li>
              <button onClick={handleShow} className="btn-connect">
                Add ONERep File
              </button>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Table striped className="zl_transaction_list_table table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>IPFS URI</th>
              <th>Reputation Value</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {repfiles.map((row, i) => (
              <tr key={i}>
                <td>{row.filename}</td>
                <td>{row.ipfsuri}</td>
                <td>{row.reputation}</td>
                <td>{row.status ? "Completed" : "Failed"}</td>
                <td>{row.created_at}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal centered show={show} size="lg" onHide={handleClose}>
        <Modal.Body>
          <div className="p-4">
            <StepProgressBar
              onSubmit={handleSubmit}
              startingStep={0}
              submitBtnName="Mint"
              nextBtnName="Next"
              steps={[
                {
                  label: "Step 1",
                  content: step1Content,
                  validator: step1Validator,
                },
                {
                  label: "Step 2",
                  content: step2Content,
                  validator: step2Validator,
                },
                {
                  label: "Step 3",
                  content: step3Content,
                },
              ]}
            />
          </div>
        </Modal.Body>
      </Modal>
      <Modal centered show={showSucces} onHide={handleCloseSuccess}>
        <Modal.Body>
          <div className="p-4">
            <br />
            <h4 className="text-center text-white">
              Successfully <br /> Minted
            </h4>
            <br />
            <br />
            <div className="text-center">
              <button
                type="button"
                className="btn-connect"
                onClick={handleCloseSuccess}
              >
                Okay Got it
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};
const mapStoreToProps = ({ userAction }) => ({});
export default connect(mapStoreToProps, null)(OneRepFileModule);
