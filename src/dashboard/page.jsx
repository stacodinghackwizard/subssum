import DashboardHeader from '../components/dashboard/header'
import Home from './home'
import './style.css'


export default function Page() {

    return (

        <>
           
           <div id="layout-wrapper">
            
            <DashboardHeader />
            <Home/> 
           </div>

        </>

    )

}