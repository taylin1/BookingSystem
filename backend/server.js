const express = require('express');
const cors = require('cors');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Resources
let resources =[{
    id: '1',
    name: 'Room A'
},
{
    id: '2',
    name: 'Room B'
},
{
    id: '3',
    name: 'Room C'
}]


//All bookings is stored in the array
let bookings = [];


//Gets all resources
app.get('/resources', (req, res) =>{
    res.json(resources);
});

//Get bookings for 1 resource 
app.get('/bookings', (req, res) => {
    const id = req.params.id;
    const filtered = bookings.filter(b => b.resourceId === id);
    res.json(filtered);
})



const PORT = 5000;


app.listen((PORT), () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

