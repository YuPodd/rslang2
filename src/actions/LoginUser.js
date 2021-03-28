const loginUser = async user => {
  const rawResponse = await fetch('https://rs-lang.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  console.log(JSON.stringify(user));
  const res = await rawResponse;
  if(res.ok === true){
    const data = await res.json();
    console.log(data)
    localStorage.setItem('token', JSON.stringify(data.token).slice(1,-1));
    return data;
  }
  return false;

};
export default loginUser