let hre = require("hardhat");

let fs = require("fs");

let express = require("express");
let cookieParser = require("cookie-parser");
let cors = require("cors");
let axios = require('axios');

let dotenv = require("dotenv");

// helper functions 
function checkUser(data, email) {
    for (const x in data) {
        if (data[x]["email"] == email) {
            return true
        }
    }
    return false
}

function addUserCred(name, email, phone, country, address, idType, idNumber, walletAddress) {
    fs.readFile('./creds/index.json', (err, cred) => {
        if (err) throw err;
        cred = JSON.parse(cred)
        var count = Object.keys(cred).length;
        count++;
        var userId = "user" + count
        cred[userId] = { "name": name, "email": email, "phone": phone, "country": country, "address": address, "idType": idType, "idNumber": idNumber, "walletAddress": walletAddress }
        cred = JSON.stringify(cred)
        fs.writeFile('./creds/index.json', cred, (error) => {
            if (error) throw error;
            console.log("Succesfully added credentials")
        })
    })
}

async function getAllowListI(allowListAddress) {
    return await hre.ethers.getContractAt("IAllowList", allowListAddress);
}

//express api
let app = express();
app.use(express.json());
app.use(cookieParser("top secret")); //sign
app.use(cors());

app.post("/kyc", async (req, res) => {

    let name = req.query.name;
    let email = req.query.email;
    let phone = req.query.phone;
    let country = req.query.country;
    let address = req.query.address;
    let idType = req.query.idType;
    let idNumber = req.query.idNumber;
    let walletAddress = req.query.walletAddress;

    console.log(name, email, phone, country, address, idType, idNumber, walletAddress)
    if (name == undefined || email == undefined || phone == undefined || country == undefined || address == undefined || idType == undefined || idNumber == undefined || walletAddress == undefined) {
        //@todo add statusCode
        res.send("Incomplete data");
    } else {
        fs.readFile("./creds/index.json", async (err, data) => {
            data = JSON.parse(data);
            if (err) {
                console.log(err);
                res.statusMessage = "internal error";
                res.statusCode = 320;
                return;
            }
            let isExist = checkUser(data, email);
            if (isExist == true) {
                //@todo add statusCode
                res.send("Already KYC'd with this email");
            } else {
                // @todo validate signature validateSig(walletAddress, walletSignature)
                addUserCred(name, email, phone, country, address, idType, idNumber, walletAddress);
                //0x0200000000000000000000000000000000000002 --> txAllowList precompile address
                // let txAllowListInstance = await getAllowListI("0x0200000000000000000000000000000000000002");
                // let tx = await txAllowListInstance.setEnabled(walletAddress);

                res.statusCode = 200;
                res.send();
            }
        })
    }
});

let port = 4000;
let server = app.listen(port);
console.log("listening on port: ", port)