interface smr {
    id: String;
    sender: string;
    message: string;
    receiver: string;
    color: colors
};

interface colors {
    upper: string;
    middle: string;
    bottom: string;
}

type inputlink = {
    inplink: smr
}


export const resolvers = {

    Query:{
        link:async(_:any,{id}:any)=>{
            console.log(id);
            const link =  await fetch(`${process.env.NEXT_PUBLIC_MY_URL}/api/fauna`,{
            // const link =  await fetch("https://v-lollipop.vercel.app/api/fauna",{
            // const link =  await fetch("https://v-lollipop.vercel.app/api/fauna",{
            // const link =  await fetch('http://localhost:3000/api/fauna',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    "getlink":'yes'
                },
                body:JSON.stringify({id})
            })
            .then((data)=>data.json())
            .then((data)=>data.data);


            return link;
    },
    str:()=>{
        return "hello str"
    }
},

    Mutation:{
         getLink:async(_:any,{inplink:{id,sender,message,receiver,color}}:inputlink)=>{
            const data = await fetch(`${process.env.NEXT_PUBLIC_MY_URL}/api/fauna`,{
                // const data =  await fetch("https://v-lollipop.vercel.app/api/fauna",{
                // const data =  await fetch("https://v-lollipop.vercel.app/api/fauna",{
                    // const data = await fetch('http://localhost:3000/api/fauna',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'postlink':'yes'
                },
                body: JSON.stringify({id,sender,message,receiver,color})
            });
            const dat = await data.json();
            const getLink = await dat.data;
            return  getLink;
        }
    }
}