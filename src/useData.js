import { useState, useEffect } from 'react';
import { db } from './connect';
import { getDatabase, ref as fRef, onValue, get } from "firebase/database";
import moment from 'moment';


export default function useData() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = fRef(db);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newData = washData(data)
      setProjects(newData);
    });
  }, []);

  const washData = (data) => {
    const b = [data.can1, data.can2]
    const c = b.map(num => {
      const time = Object.keys(num.datalog)
      const value = Object.values(num.datalog)
      // console.log(time,value)
      let s = []
      for (let i in time) {
        let date = new Date(time[i]* 1000);
        let year = date.getFullYear()
        let month = date.getMonth() +1
        let day = date.getDate()
        // Hours part from the timestamp
        let hours = date.getHours();
        // Minutes part from the timestamp
        let minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        let seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        let formattedTime = year +'-'+month+'-'+day+'/'+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        
      
        s.push([`${formattedTime}`, value[i]]);
      }
      return s

    })
    b[0].data = c[0]
    b[1].data = c[1]
    console.log(b);
    b[0].name = '垃圾桶1'
    b[1].name = '垃圾桶2'
    return b
  }

  return { data: projects }
}
