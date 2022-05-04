const fs = require('fs');
const uploadFile = require("../middleware/upload");
const fUpload  = require('../../models/upload');
const fAction  = require('../../models/action');
const ipfsAPI = require('ipfs-api');
const { create } = require('ipfs-http-client');
const fetch = require("node-fetch");
//const ipfs = require('ipfs');

exports.upload = async (req, res) => {
  try { 
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};
async function ipfsClient(){
  const ipfs = await create(
    {
      host:"ipfs.infura.io",
      port:5001,
      protocol:"https"
    }
  );
  return ipfs
}
async function processData(hash){

  let ipfs =  await ipfsClient();
  let asyncitr=ipfs.cat(hash)
  for await(const itr of asyncitr){
     console.log("the itr",itr)
     let data = Buffer.from(itr).toString()
     console.log("The processed data:",data)
  }

}

async function getData(uri) {
  const response = await fetch(uri, {
    headers : { 
      'content-type': 'text/csv;charset=UTF-8'
     }
    })
    .catch(function() {
      console.log("error");
  }); 
  
  
  const data = await response.text();
   console.log(data);
  
   const rows = data.split((/\r?\n|\r/)).slice(1);
   console.log(rows[1]);
  //  rows.forEach(elt => {
  //          const colums = elt.split(';');
  //          const titre = colums[0];
  //          // console.log(titre);
  //          DATA_ARRAY.push(titre);
  //  })
  
  //console.log(DATA_ARRAY);
    }
exports.addFile = async (req, res) => {
  console.log("enter in controller")
  try { 
    fUpload.findOne({ipfsuri: req.body.ipfsuri}).then((data) => {
      console.log("inside file")
      if (data)
      {
        res.status(200).send({success: false});
      }
      else
      {
        console.log("enter in else")
        const addfile = new fUpload({
          filename: req.body.filename,
          ipfsuri: req.body.ipfsuri,
          status: req.body.status,
          reputation: req.body.reputation,
          parent: req.body.master
        });
        console.log("enter in fupload")
        console.log("The length of string ", req.body.ipfsuri.length)
        console.log("Substring ", req.body.ipfsuri.substr(28,74))
        const fileHash = req.body.ipfsuri.substr(28,req.body.ipfsuri.length)
        getData(req.body.ipfsuri)
       // processData(fileHash)
//        fetch(req.body.ipfsuri, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'text/csv',
//     },
//   })
//   .then((response) => response.blob())
//   .then((blob) => {
//     console.log("blob",blob)
//     let reader = new FileReader();
// reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

// reader.onload = function() {
//   console.log("reader result")
//   link.href = reader.result; // data url
//   link.click();
// };
    // Create blob link to download
    // const url = window.URL.createObjectURL(
    //   new Blob([blob]),
    // );
    // const link = document.createElement('a');
    // link.href = url;
    // link.setAttribute(
    //   'download',
    //   `FileName.pdf`,
    // );
 // });
        // IPFS.files.get(fileHash, function (err, files) {
        //   files.forEach((file) => {
        //       console.log(file.path)
        //       console.log("File content >> ",file.content.toString('utf8'))
        //   })
      
        addfile.save().then((result) => {
         // console.log("show result",result)
        //   console.log("then inside")
        //   const data = req.body.data;
        //   data.map( (row, i) => {
        //     console.log("maping")
        //     const addAction = new fAction({
        //       name: row[1],
        //       wallet: row[2],
        //       received: parseInt(row[3]),
        //       sent: parseInt(row[4]),
        //       epoch_number: row[5],
        //       date: row[6],
        //       parent: req.body.master
        //     });
        //     addAction.save().then((result) => {
        //       console.log("save data")
        //     }).catch((err) => {
        //       console.log(err);
        //     });
        //   })
         res.status(200).send({success: true});
        }).catch((err) => {
          res.status(200).send({success: false});
        });
        // const addAction = new fAction({
        //   name: '1',
        //   wallet: '1',
        //   received: 0,
        //   sent: 0,
        //   epoch_number: '1',
        //   date: 'asd',
        //   from: 'a'
        // });
        // addAction.save().then((result) => {
        //   console.log(result);
        // }).catch((err) => {
        //   console.log(err);
        // });
      }
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not add the file`,
    });
  }
};

exports.ipfsupload = async (req, res) => {
  let testFile = fs.readFileSync(req.body.filepath);
  //Creating buffer for ipfs function to add file to the system
  let testBuffer = new Buffer(testFile);
  const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'});
  ipfs.files.add(testBuffer, function (err, file) {
    if (err) {
      console.log(err);
    }
    console.log(file)
  })
}

exports.getListFiles = (req, res) => {
  // const directoryPath = __basedir + "/upload/";
  // fs.readdir(directoryPath, function (err, files) {
  //   if (err) {
  //     res.status(500).send({
  //       message: "Unable to scan files!",
  //     });
  //   }
  //   let fileInfos = [];
  //   files.forEach((file) => {
  //     if(file.split('__')[0] == req.query.userId) {
  //       fileInfos.push({
  //         name: file,
  //         url: directoryPath + file,
  //       });
  //     }
  //   });
  //   res.status(200).send(fileInfos);
  // });
  try
  {
    fUpload.find({parent: req.body.master}).then((files) => {
      res.status(200).send(files);
    });
  }
  catch(e) {
    res.status(200).send([]);
  }
};

exports.download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/uploads/";
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

exports.getOneRepFile = (req, res) => {
  const directoryPath = __basedir + "/upload/";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      if(file.split('__')[0] == req.query.userId) {
        fileInfos.push({
          name: file,
          url: directoryPath + file,
        });
      }
    });
    res.status(200).send(fileInfos);
  });
};