
import Trashcan from './component/Trashcan.js';
import useData from './useData.js';



function App() {

  const { data } = useData();
 
  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', height: "100vh", width: "100%", backgroundColor: "#000000"
    }}>
      <div style={{
        display: 'flex', backgroundColor: '#FFA05F', width: "80%", height: "90%", margin: "15px", border: "3px", marginTop: "50px", borderRadius: "10px", alignItems: 'flex-around', justifyContent: "space-around", flexWrap: "wrap"
      }}>
        {
          data?.map((item, index) => {
            // console.log(item);
            return (
              <Trashcan name={item.name} status={item.status} key={index} data={item.data} />
            )
          })
        }
      </div>


    </div>


  );
}

export default App;
