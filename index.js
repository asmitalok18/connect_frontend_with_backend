import express from 'express';

const app= express();

const port = process.env.PORT || 3000;

app.use(express.static('dist'))

app.get('/api/jokes',(req,res) =>{
    const jokes =  [
        {
            id:1,
            title:"joke1",
            content:"This is joke 1"
        },
        {
            id:2,
            title:"joke2",
            content:"This is joke 2"
        },
        {
            id:3,
            title:"joke3",
            content:"This is joke 3"
        },
        {
            id:4,
            title:"joke4",
            content:"This is joke 4"
        },
        {
            id:5,
            title:"joke5",
            content:"This is joke 5"
        },
    ];
    res.send(jokes);
})

app.listen(port,(req,res) =>{
    console.log(`Serve at http://localhost:${port}`);
});