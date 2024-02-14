import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1570589867577-095368ee1649?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const SUMMER_URL="https://i.imgur.com/HZjZJMl.jpg";
    const WINTER_URL="https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={    info.humidity > 80 ? RAIN_URL
                      :info.temp >20 ? SUMMER_URL : WINTER_URL  }
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city} {    info.humidity > 80 ? <ThunderstormIcon />
                      :info.temp >20 ? <WbSunnyIcon />: <AcUnitIcon />  }
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
            <p><b>Temperature</b> = {info.temp}&deg;c </p>
            <p><b>Humidity</b> = {info.humidity} </p>
            <p><b>Max Temperature</b> = {info.tempMax} </p>
            <p><b>Min Temperature</b> = {info.tempMin} </p>
            <p>The weather can be described as {info.weather} & feels like {info.feelsLike}&deg;c</p>
            </Typography>
        </CardContent>
    </Card>
        </div>
        </div>
    );
}