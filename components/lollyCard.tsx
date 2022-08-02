import React, { useState } from 'react'
import Lolly from './lolly'
import styles from '../styles/lollyCard.module.css'
import { useMutation } from '@apollo/client'
import { POST_lolly } from '../clientQueries'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {}

const LollyCard = (props: Props) => {
    
  const [addLolly,{data,error,loading}] = useMutation(POST_lolly);
  const router = useRouter();

  const [form, setForm] = useState({
    sender:'',
    message: '',
    receiver: ''
  })
    const [chcol1, setchcol1] = useState<string>("#d52358");
    const [chcol2, setchcol2] = useState<string>("#e95946");
    const [chcol3, setchcol3] = useState<string>("#67000D");    


    var arr:number[] = [];
    let str:any = '';

    for (let index = 0; index < 14; index++) {
        arr.push(Math.floor(Math.random() * 10));
    }

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index].toLocaleString();
        str += element;
    }


    const regLolly = (e:any)=>{
      console.log(str)
      addLolly({variables:{
        inplink: {
        id: str,
        sender: form.sender,
        message: form.message,
        receiver: form.receiver,
        color: {
          upper: chcol1,
          middle: chcol2,
          bottom: chcol3
        }
    }}});
    if(loading) return '...Loading';
    if(data){
    console.log(data)
    router.push(`/lolly/${data.getLink.data.id}`)
    }
    e.preventDefault();
    }

    const handleChange = (e:any)=>{
      setForm({...form,[e.target.name]:e.target.value})
    }
   
  return (
    <div className={styles.lollydiv}>
      <div>
    <Lolly upperColor={chcol1} middleColor={chcol2} bottomColor={chcol3}/>
    <div className='lollyUpper'>
      <input className={styles.lollyInput} value={chcol1} type="color" onChange={(e)=>setchcol1(e.target.value)}/>
      <input className={styles.lollyInput} value={chcol2} type="color" onChange={(e)=>setchcol2(e.target.value)}/>
      <input className={styles.lollyInput} value={chcol3} type="color" onChange={(e)=>setchcol3(e.target.value)}/>
    </div>
    </div>
    <div>
      <form onSubmit={regLolly}>
      <div className={styles.lollyForm}>
        <div className={styles.to}>
        <label>To</label>
        <input minLength={3} type="text" name='sender' onChange={handleChange} placeholder='A lolly for...' />
        </div>
        <div className={styles.say}>
        <label>Say Something Nice</label>
        <textarea minLength={5} cols={30} rows={10} onChange={handleChange} name='message'></textarea>
        </div>
        <div className={styles.from}>
        <label>From</label>
        <input minLength={3} type="text" name='receiver' onChange={handleChange} placeholder='from your friend...' />
        </div>
        </div>
        {/* <Link href="/lolly/Lolly" type='submit' className={styles.lollySubmit}>Freeze this lolly and get a link</Link> */}
        <button type='submit' className={styles.lollySubmit}>Freeze this lolly and get a link</button>
      </form>      
    </div>
    </div>
  )
}

export default LollyCard;