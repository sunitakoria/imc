const express = require('express');
const cors = require('cors');
const app = express();
var fs = require('fs');
const path = require('path');

// Add mysql database connection
const dataJson = "./data.json";
// Enable cors security headers
app.use(cors())

// add an express method to parse the POST method
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// home page
/*app.get('/', (req, res) => {
  res.send('Hi There')
});*/
app.use(express.static(path.join(__dirname, 'build')));


app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
app.post("/insert", (req, res) => {
  console.log('rest',req);
  const bookName = req.body.setBookName;
  const bookReview = req.body.setIn;
  const setIn = req.body.setIn;
  const setOut = req.body.setOut;
  const dateBook =new Date().toISOString();
const file = fs.readFileSync(dataJson);
const dataRes = JSON.parse(file);
if(!bookName){
return false;
}
dataRes.push({id:dataRes.length,book_name:bookName,book_review:bookReview,book_in:setIn,book_out:setOut,book_date:dateBook
});

fs.writeFileSync(dataJson,JSON.stringify(dataRes));
});
// add a book to the database

app.get('/getAll', (req, res) => {

const file = fs.readFileSync(dataJson);
const dataRes = JSON.parse(file);
let dataName = []
let actualData = []
dataRes.map((val)=>{
if(!dataName.includes(val.book_name)){
dataName.push(val.book_name);
actualData.push(val);
}else{
const index = dataName.indexOf(val.book_name);
const value = actualData[index];
if(value.book_in==""){
value.book_in=0;
}
if(value.book_out==""){
value.book_out=0;
}
if(val.book_in==""){
val.book_in=0;
}
if(val.book_out==""){
val.book_out=0;
}
value.book_in=parseInt(value.book_in)+parseInt(val.book_in);
value.book_out=parseInt(value.book_out)+parseInt(val.book_out);
actualData[index] =value;
}
})
res.send(actualData)
})

app.get('/get', (req, res) => {

  const file = fs.readFileSync(dataJson);
  const dataRes = JSON.parse(file);
  let dataName = []
  let actualData = []
  const actualDate= new Date().toISOString();
  dataRes.map((val)=>{
  if(val.book_date.toString().includes(actualDate.substr(0,10))){
  //dataName.push(val.book_name);
  actualData.push(val);
  }
  })
  res.send(actualData)
  })
  
// add a book to the database
app.post("/insert", (req, res) => {
const bookName = req.body.setBookName;
const bookReview = req.body.setIn;
const setIn = req.body.setIn;
const setOut = req.body.setOut;
const dateBook =new Date().toISOString();
const file = fs.readFileSync(dataJson);
const dataRes = JSON.parse(file);
if(!bookName){
return false;
}
dataRes.push({id:dataRes.length,book_name:bookName,book_review:bookReview,book_in:setIn,book_out:setOut,book_date:dateBook
});
// Printing data
console.log(dataRes)
fs.writeFileSync('./data.json',JSON.stringify(dataRes));
console.log('done')
})
// delete a book from the database
app.delete("/delete/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  const DeleteQuery = "DELETE FROM books_reviews WHERE id = ?";
  db.query(DeleteQuery, bookId, (err, result) => {
    if (err) console.log(err);
  })
})

// update a book review
app.put("/update/:bookId", (req, res) => {
  const bookReview = req.body.reviewUpdate;
  const bookId = req.params.bookId;
  const UpdateQuery = "UPDATE books_reviews SET book_review = ? WHERE id = ?";
  db.query(UpdateQuery, [bookReview, bookId], (err, result) => {
    if (err) console.log(err)
  })
})

app.listen('3001', () => { })