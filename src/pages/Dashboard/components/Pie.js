import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { crudActions } from '../../../actions'

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Registros x Paquete'
    },
    credits:{
        enabled:false
      },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Platino',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Vip',
            y: 11.84
        }, {
            name: 'Diamante',
            y: 10.85
        }, {
            name: 'Premium',
            y: 4.67
        }]
    }]
};
 
class Pie extends Component {
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

export default connect(mapStateToProps,mapDispatchToProps)(Pie);
