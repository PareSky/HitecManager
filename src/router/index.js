import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/page/Main'
import Wrapper from '@/page/Monitor/Wrapper'
import Plat from '@/page/Monitor/Plat'
import Detail from '@/page/Monitor/Detail'
import Device from '@/page/Device'
import Data from '@/page/Data'
import System from '@/page/System'

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
    				{path:'detail',name:'Detail',component:Detail},
    			]
    		},
    		{name:'Device',path:'device',component:Device},
    		{name:'Data',path:'data',component:Data},
    		{name:'System',path:'system',component:System}
    	]
    }
  ]
})
