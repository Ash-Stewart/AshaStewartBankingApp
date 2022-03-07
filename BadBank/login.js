function Login(){
  const [show]       = React.useState(true);
  const [status]     = React.useState('');
  const [name]       = React.useState('');
  const [email]      = React.useState('');
  const [password] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:800});
    show(false);
  }

  return (
    <Card
    bgcolor="primary"
    card="Login"
    status={status}
    body={show ? (  
            <>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => email(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => password(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Login</button>
            </>
      /> 
      )
    }
  )  
}
