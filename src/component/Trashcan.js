import * as React from 'react';


import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import trash from '../svg/trash.svg';
import Linechart from './Linechart.js';
import './Trasncan.css'

export default function ImgMediaCard(props) {
    console.log(props.status);
    let status = props.status
    if (status) {
        status = "已滿"
    }
    else {
        status = "未滿"
    }
    return (
        <div className='card'>

            <div class='font'>
                <img src={trash} className='cardimg' />
                <CardContent >
                    <Typography gutterBottom variant="h6" component="p" >
                        名稱：{props.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="p" >
                        狀態：{status}
                    </Typography>

                </CardContent>
            </div>
            
            <div className='back'>
              
                <Linechart data={props.data} />
            </div>

        </div>
    );
}