// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({secret:process.env.FAUNA_SECRET})

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
        if(req.headers.getlink==='yes'){
          console.log(req.body);
          const {id} = req.body;
          // console.log(id);
          console.log(req.body.id)
          const dba = await client.query(
          q.Get(q.Match(q.Index('search_by_id'),id))
          // q.Get(q.Match(q.Index('search_by_id'),"58358918634161"))
          // q.Get(q.Ref(q.Collection('links'),("338261997273481801")))
        )
        res.json({data:dba})
        }

        if(req.headers.postlink==='yes'){
          const {id,sender,message,receiver,color:{upper,middle,bottom}} = req.body;
        var dta = await client.query(
            q.Create(q.Collection('links'),{data:{id,sender,message,receiver,color:{upper,middle,bottom}}})
          )
          res.json({data:dta})
        }
    }catch(error){
      console.log(error)
    }
}
