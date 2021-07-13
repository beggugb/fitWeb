import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { crudActions } from '../../../actions'

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const newDate = new Date()
const options = {
  chart: {
    type: 'column'
},
title: {
    text: 'Ingresos x Mes'
},
subtitle: {
  text: 'Año : '+ newDate.getFullYear()
},
credits:{
  enabled:false
},
xAxis: {
    categories: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic'
    ],
    crosshair: true
},
yAxis: {
    min: 0,
    title: {
        text: 'Cantidad (u)'
    }
},
tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
},
plotOptions: {
    column: {
        pointPadding: 0.2,
        borderWidth: 0
    }
},
series: [{
    name: 'Platino',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

}, {
    name: 'Vip',
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

}, {
    name: 'Diamante',
    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

}, {
    name: 'Premium',
    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

}]
};
 
class Bars extends Component {
	constructor(props) {
    super(props);
     this.state = {      
      
    };    
  }

   UNSAFE_componentWillMount(){
    /*this.props.getArticulosReporte()*/
  }


	render() {
	
		
		return (
		<div>			
      <HighchartsReact highcharts={Highcharts} options={options} />
		</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...crudActions
    },
    dispatch,
  )  
})

const mapStateToProps = state => ({
  clientes: state.clientes

});

export default connect(mapStateToProps,mapDispatchToProps)(Bars);
