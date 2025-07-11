import { useEffect, useState } from 'react';



function InputComponent({name}) {
  const [userInput, setUserInput] = useState(0);
  const [postId, setPostId] = useState(1);
  const [postDetails, setPostDetails] = useState(null);
  useEffect(() => {

    async function getPosts(id){
       const posts= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
       setPostDetails(await posts.json());
    }

    getPosts(postId);


    // return () => {
    //   // Cleanup function if needed
    //   console.log('Cleanup for InputComponent');
    // }
  }, [postId]);

  return (
    <>
      
       <input 
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(() => e.target.value)}
          placeholder="Enter Your Age"
        />
        <button onClick={() => setPostId(userInput)}>Get Post</button>
        <p>You have entered Post Detail: {JSON.stringify(postDetails)}</p>
        <p>post id:{postDetails?.id}</p>
        <p>post title:{postDetails?.title}</p>
        <p>post body:{postDetails?.body}</p>
    </>
  )
}

export default InputComponent