const createUser = async user => {
  const rawResponse = await fetch('https://rs-lang.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse;
  if(content.ok === true){alert('User was created!')}
  console.log(await content.json())
};
export default createUser