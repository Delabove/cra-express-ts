import React, { useEffect, useState } from 'react';
import { RouteProps } from 'react-router-dom';

import { v4 as uuid } from 'uuid';

import client from '../client';
import { Concert } from '../interfaces/concerts';


import styles from './styles/concert-table.module.css';


const ConcertTable = ({ routeProps }: Props) => {


  const [concerts, setConcert] = useState<Concert[]>([])
  const [isLoading, setIsLoading] = useState(true)
  // const [currentPage, setCurrentPage] = useState<IPage>({number: 1});
  // const [concertsPerPage, setConcertsPerPage] = useState(15);

  useEffect(() => {


    const fetchConcert = async (): Promise<void> => {
      try {
        const { data } = (await client.get('/concerts')) as ConcertApiResponse
        setConcert(data)
      } catch (error) {
        console.error('error', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchConcert()
  }, [])

  // const indexOfLastPost = currentPage * setCurrentPage;
  // const indexOFirstPost = indexOfLastPost - setConcertsPerPage;
  // const currentConcerts = concerts.slice(indexOFirstPost, indexOFirstPost)


  return isLoading ? (
    <h1>Loading..</h1>
  ) : (
    <>
      <h1 className={styles.concertPageTitle}>Concert List</h1>
      <div className={styles.concertPage}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {concerts.map(concert => (
            <tr key={uuid()}>
              <td>{concert.artist}</td>
              <td>{concert.date}</td>
              <td className={styles.locationCell}>{concert.location}
            <span className={styles.buyButton} ><button>Buy Ticket!</button></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  )
}

interface Props {
  routeProps: RouteProps
}

interface ConcertApiResponse {
  data: Concert[]
}


export default ConcertTable


