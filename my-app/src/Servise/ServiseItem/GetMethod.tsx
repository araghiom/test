import axios from 'axios'



 interface Iprops{
    onGet:()=> void
 }


export const GetMethod =  async (props:Iprops) => {
    const response = await axios.get("http://localhost:8001/posts");
    const entryData = await response.data;
   
  };

  

  