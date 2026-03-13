//port config
const port =3001;
//express config
const exp=require("express");
//conflig server app
const app =exp();
const name = "Chamudini Thathsarani";
const batch = "Batch 2024";

app.listen(port, () => {
    console.log(`Server started at Port: ${port}`);
    console.log(`Name: ${name}`);
    console.log(`Batch: ${batch}`);
    console.log("Press Ctrl + C to stop the server");
});
// app.listen(port);
