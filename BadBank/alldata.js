function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <Card
    title= "All Data in Store"
    body {JSON.stringify(ctx)}
    </>
  );
}
