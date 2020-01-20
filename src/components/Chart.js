 import React from 'react';
 import {Line} from 'chart.js'
 import '../styles/Chart.css'


 class Chart extends React.Component{
     constructor(props){
        super(props);

        this.state = {
            chartData: props.chartData
                 
        }

     }

     static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        location:'City'
      }
      
     render(){
         return(
             
             <div className='chart'>

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        
             </div>
         )
     }
 }

 export default Chart;