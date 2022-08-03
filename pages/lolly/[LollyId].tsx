import { gql, useLazyQuery, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import Lolly from '../../components/lolly'
// import styles from '../styles/lollyLink.module.css'
import styles from '../../styles/lollyLink.module.css'
import {GET_LINK} from '../../clientQueries'
import { useRouter } from 'next/router'


type Props = {
}

// function LollyLink({link}: Props) {
function LollyLink({}: Props) {
  const router = useRouter();

    const {data,error,loading} = useQuery(GET_LINK,{
    variables:{id:router.query.LollyId},
  });

  

  if(loading) return "...Loading";
  if(error) console.log(error);
  if(data){
    console.log(data)
  }

  return (
    <div>
      {data && (
    <div className={styles.lollydiv}>
      <div>
    <Lolly upperColor={data?.link?.data?.color?.upper || ''} middleColor={data?.link?.data?.color?.middle || ''} bottomColor={data?.link?.data?.color?.bottom || ''}/>
    </div>
    <div className={styles.card}>
      <div>
      <p style={{margin:'1em 0',fontFamily:'open-sans, Helvetica, sans-serif'}}>Enjoy your lolly! Share it with this link:</p>    
      <p className={styles.link}>{`${process.env.NEXT_PUBLIC_MY_URL}/lolly/${router.query.LollyId}`}</p>
      </div>
      <div className={styles.subcard}>
            <p id="recipient" className={styles.recipient}>{data?.link?.data?.sender}</p>
            <div id="message" className={styles.message}>{data?.link?.data?.message}</div>
            <p id="from" className={styles.from}>— {data?.link?.data?.receiver}</p>
      </div>
    </div>
    </div>
      )}
    </div>
  )
}

export default LollyLink
