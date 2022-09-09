import axios from 'axios';

interface Iprops{
    entrydata : string
}

export const PostMethod = async (props:Iprops) => {
    await axios.post("http://localhost:8001/Posts", props.entrydata).then((response) => {
      console.log(response);
     
    });
    
  };
  