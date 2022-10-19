import React from 'react'
import Box from '../Box/Box'
import './css/DetailsFooter.css'
import { ConstantText } from '../../constants/constants'

const DetailsFooter = () => {
  const style = { backgroundColor: 'rgb(207, 183, 237)' }

  return (
    <div className='bottomContainer'>
        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Height}</strong>
			<p className="gridValue">3'3"</p>
		</div>

        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Weight}</strong>
			<p className="gridValue">13 {ConstantText.Weight_Measure}</p>
		</div>

        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Gender}</strong>
            <div className='gridRow'>
    			<p className="gridValue">Female, Male</p>
            </div>
		</div>

        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Egg_Groups}</strong>
            <div className='gridRow'>
			    <p className="gridValue">Monster, Plant</p>
            </div>
		</div>

        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Abilities}</strong>
            <div className='gridRow'>
			    <p className="gridValue">Overgrow, Chlorophyll</p>
            </div>
		</div>
        <div className='individualGrid'>
			<strong className="gridTitle">{ConstantText.Types}</strong>
            <div className='gridRow'>
			    <Box content='Poison' style={style}/>
			    <Box content='Grass' style={style}/>
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