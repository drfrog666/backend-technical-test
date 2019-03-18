import React, {Component} from 'react';
import X3DOM from 'x3dom';

export class Webgl extends Component {

    constructor() {
        super();
        this.state = {color:"1 1 0",size:"1, 2, 2"};
    }
    
    render(){
        //console.log(this.props);
        var index= Math.random();
        if (this.props.index !== undefined){
          //console.log("setting prop");
          index=  this.props.index;
        }
        //console.log(index);
        
	return (
        
		<x3d id={index} style={{width:'400px',height:'100px'}} showLog="true">
		<scene>
		<viewpoint position='0 0 10' ></viewpoint>
		<shape>
            <appearance>
                <material diffusecolor={this.state.color} ></material>
            </appearance>
            <sphere radius='0.2'></sphere>
        </shape>
		<shape>
            <appearance>
                <material diffusecolor='1 0 1' ></material>
            </appearance>
            <box Size='2,4,2'></box>
        </shape>
                
        <transform translation='0 0 2'>
        <shape>
            <appearance>
                <material diffusecolor={'0 0 0'} ></material>
            </appearance>
                    <text string={this.props.temp} solid='false'>
            <fontstyle family="'Times' 'Orbitron'" size="0.8" justify="begin"></fontstyle>
        </text>
        </shape>
        </transform>
        
		</scene>
		</x3d>
		
	);
  }
}
