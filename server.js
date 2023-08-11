const students = require('./models/students')
// importing our data from student.js file
  console.log(students);


const express = require('express')

// creating our first instance express
const app = express()

const PORT = 3000

// ------ middleware
app.set('view engine', 'jsx');
// setting view engin jsx
app.engine('jsx', require('express-react-views').createEngine());
// creating our engine

app.use(express.json());
// allow us to read client's request.body

app.use(express.urlencoded({ extended: false }));
// accepting data in a specific format 




// our ROUTES

app.get('/',(req, res)=>{
  res.render('Index', {students: students})
  // takes in two aguments
})
app.get('/New',(req, res)=>{
  res.render('New')
})



// POST Route
app.post('/',(req, res)=>{
  if(req.body.cool === "on"){
    req.body.cool = true
  }else{
    req.body.cool = false
  }
  students.push(req.body)
  res.redirect('/')
})


app.listen(PORT,()=>{
  console.log(`listening on${PORT}`);
})