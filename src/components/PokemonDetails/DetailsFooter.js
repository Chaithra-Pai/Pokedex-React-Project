import React from 'react'
import Box from '../Box/Box'
import './css/DetailsFooter.css'
import { ConstantText } from '../../constants/constants'
import { Pokemon_Color_Codes } from '../../constants/constants' 

const DetailsFooter = (props) => {
  const style = { backgroundColor: 'rgb(207, 183, 237)' }
  const heightFeet =  props.height?.toString().split('.')[0]
  const heightInch =  props.height?.toString().split('.')[1]

  return (
    <div className='bottomContainer'>
        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Height}</strong>
			<p className="gridValue">{heightFeet}' {heightInch}"</p>
		</div>

        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Weight}</strong>
			<p className="gridValue">{props.weight} {ConstantText.Weight_Measure}</p>
		</div>

        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Gender}</strong>
            <div className='gridRow'>
				{
					props.genderDataArray?.map((item, index) =>{
						return(
							<p className="gridValue"  key={item}>{ (index ? ', ' : '') + item }</p>
						)
					})
				} 
            </div>
		</div>

        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Egg_Groups}</strong>
            <div className='gridRow'>
				{
					props.egg_groups?.map((item,index) => {
						return <p className="gridValue" key={index}>{ (index ? ', ' : '') + item.name }</p>
					})
				}    
            </div>
		</div>

        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Abilities}</strong>
            <div className='gridRow'>
				{
					props.abilities?.map((item,index) => {
						return <p className="gridRow" key={index}> { (index ? ', ' : '') + item.ability?.name }</p>
					})
				}
            </div>
		</div>
        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Types}</strong>
            <div className='gridRow'>
				{
					props.types?.map((item,index) => {
						return <Box content={item?.type?.name} backgroundColor={Pokemon_Color_Codes[item?.type?.name?.toUpperCase()]} key={index}/>
					})
				}
            </div>
		</div>

        <div className='individualGrid' style={{ gridColumnEnd: 'span 2' }}>
			<strong className="gridTitle">{ConstantText.Weak_Against}</strong>
            <div className='gridRow'>
			    <Box content='Flying' style={style}/>
			    <Box content='Bug' style={style}/>
			    <Box content='Ice' style={style}/>
			    <Box content='GROUND' style={style}/>
			    <Box content='PSYCHIC' style={style}/>
			    <Box content='PSYCHIC' style={style}/>
			    <Box content='PSYCHIC' style={style}/>

            </div>		
		</div>
    </div>
  )
}

export default DetailsFooter