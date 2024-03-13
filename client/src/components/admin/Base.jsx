import React from 'react'
// import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
//   from 'react-icons/bs'
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
//   from 'recharts';

function Base() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  return (
    <main className='main-container'>
      {/* <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div> */}

      <div className='main-cards d-flex justify-content-center'>
        <div className='card1 w-25'>
          <div className='card-inner'>
            <h3>Users</h3>
            {/* <BsFillArchiveFill className='card_icon' /> */}
          </div>
          <h1>11</h1>
        </div>
        <div className='card1 w-25'>
          <div className='card-inner'>
            <h3>Services</h3>
            {/* <BsFillGrid3X3GapFill className='card_icon' /> */}
          </div>
          <h1>30</h1>
        </div>
        
      </div>

      <div className='charts' >
        <div className='container d-graph1'>
          {/* <iframe 
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: 2,
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
            }}
            width={640}
            height={480}
    
            src="https://charts.mongodb.com/charts-project-0-pzpnj/embed/charts?id=65eee041-38af-44c8-80ce-fbb997ca50e6&maxDataAge=-1&theme=dark&autoRefresh=true"
          /> */}
          <iframe
        //    style={{background: "#FFFFFF",border: none, border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" }}
           width="640" 
           height="500" 

           src="https://charts.mongodb.com/charts-project-0-pzpnj/embed/charts?id=65eee041-38af-44c8-80ce-fbb997ca50e6&maxDataAge=-1&theme=light&autoRefresh=false"/>

        </div>


      </div>
    </main>
  )
}

export default Base