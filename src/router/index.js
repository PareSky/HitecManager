import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/page/Login'
import Main from '@/page/Main'
import Wrapper from '@/page/Monitor/Wrapper'
import Plat from '@/page/Monitor/Plat'
import Detail from '@/page/Monitor/Detail'
import Device from '@/page/Device'
import Data from '@/page/Data'
import System from '@/page/System'
import Alerts from '@/page/details/Alerts'
import Datas from '@/page/details/Datas'
import DataMap from '@/page/details/DataMap'
import Locations from '@/page/details/Locations'
import Living from '@/page/details/Living'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Main',
    	component: Main,
    	children: [
    		{name:'Monitor',path:'monitor',component:Wrapper,
    			children:[
    				{path:'plat',name:'Plat',component:Plat},
    				{path:'detail',name:'Detail',component:Detail,
                        children:[
                            {path:'alerts',name:'Alerts',component:Alerts},
                            {path:'datas',name:'Datas',component:Datas},
                            {path:'dataMap',name:'DataMap',component:DataMap},
                            {path:'locations',name:'Locations',component:Locations},
                            {path:'living',name:'Living',component:Living}
                        ]},
    			]
    		},
    		{name:'Device',path:'device',component:Device},
    		{name:'Data',path:'data',component:Data},
    		{name:'System',path:'system',component:System}
    	]
    },
    {name:'Login',path:'/login',component:Login}
  ]
})
