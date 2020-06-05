import axios from 'axios';

const url='http://localhost:3000/events';

export const fetchData= async () =>{
    try {
        const { data : {id,name,date,image,place}} =await axios.get(url);
        return {id,name,date,image,place};
    } catch (error) {
        
    }

}
//export const fetchDailyData= async () =>{
  //  try {
    //    const {data}=await axios.get(`${url}/daily`);

      //  console.log(data);
    //} catch (error) {
        
    //}
//}