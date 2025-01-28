import { AppWindow, Home, Plus, User, Video } from "lucide-react";
import { Buttons } from "@/types";
export const button : Buttons[] =[
    {
        label:'Home',
        src:"app",
        icon:<Home/>
    } ,
    {
        label:'Record',
        src:"app/Record",
        icon:<Plus/>
    } ,
    {
        label:'video',
        src:"app/video",
        icon:<Video/>
    } ,
    {
        label:'Me',
        src:"app/Profile",
        icon:<User/>
    } ,
    {
        label:'DeskTop',
        src:"app/Profile",
        icon:<AppWindow/>
    }
]